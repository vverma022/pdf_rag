import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { saveTempFile , deleteTempFile } from '@/lib/utillity/file'
import { extractTextFromFile } from '@/lib/utillity/text-manipulation';
import { chunkText } from '@/lib/utillity/chunking';
import axios from 'axios';

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

    if(!tempFilePath){
      return NextResponse.json({error: 'No Valid Filepath Found'}, {status: 400});
    }

    const textContent = await extractTextFromFile(tempFilePath);

    await deleteTempFile(tempFilePath);

    const chunks = await chunkText(textContent);

    // const embeddings = await createEmbeddings(chunks);
    
    return NextResponse.json({ success: true, chunks});
  } catch (error) {
    console.error('Error during file upload:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

const createEmbeddings = async (chunks: any) => {
  try {
    const results = [];

    for (const chunk of chunks) {
      const response = await axios.post('http://localhost:11434/api/embed', {
        input: chunk,
      });

      results.push({
        chunk,
        embedding: response.data,
      });
    }

    return results;
  } catch (error) {
    console.error('Error generating embeddings:');
    throw new Error('Failed to create embeddings');
  }
};

export default createEmbeddings;