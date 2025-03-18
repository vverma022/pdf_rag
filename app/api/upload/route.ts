import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { saveTempFile, deleteTempFile } from '@/lib/utillity/file';
import { extractTextFromFile } from '@/lib/utillity/text-manipulation';
import { OllamaEmbeddingFunction } from 'chromadb';
import client from '@/lib/chromadb';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const uploadedFiles = formData.getAll('filepond');

    if (uploadedFiles.length === 0 || !(uploadedFiles[0] instanceof File)) {
      return NextResponse.json({ error: 'No valid file uploaded' }, { status: 400 });
    }

    const uploadedFile = uploadedFiles[0] as File;
    const filename = `${uuidv4()}.pdf`;
    const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());
    const tempFilePath = await saveTempFile(fileBuffer, filename);

    if (!tempFilePath) {
      return NextResponse.json({ error: 'No valid filepath found' }, { status: 400 });
    }

    // Extract text from the uploaded file
    const textContent = await extractTextFromFile(tempFilePath);

    // Delete the temporary file
    await deleteTempFile(tempFilePath);

    // Initialize the embedding function
    const embedder = new OllamaEmbeddingFunction({
      url: 'http://127.0.0.1:11434/',
      model: 'nomic-embed-text',
    });

    // Generate embeddings for the document (full text)
    const embeddings = await embedder.generate([textContent]);

    // Create or retrieve a ChromaDB collection
    let collection = await client.getCollection({
      name: 'document_embeddings',
      embeddingFunction: embedder,
    }).catch(async () => {
      return await client.createCollection({
        name: 'document_embeddings',
        embeddingFunction: embedder,
      });
    });

    // Add the document and its embedding to the collection
    await collection.add({
      ids: [uuidv4()],
      embeddings: embeddings[0],
      metadatas: [{ filename }],
      documents: [textContent],
    });

    return NextResponse.json({ success: true, embeddings });
  } catch (error) {
    console.error('Error during file upload:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}