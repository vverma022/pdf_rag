import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { LlamaParseReader } from 'llamaindex';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    console.log("FormData entries:", Array.from(formData.entries()));

    const uploadedFiles = formData.getAll('filepond');
    console.log("Uploaded Files:", uploadedFiles);

    let filename = '';

    if (uploadedFiles && uploadedFiles.length > 0) {
      const uploadedFile = uploadedFiles[0]; 

      console.log('Uploaded File:', uploadedFile);

      if (uploadedFile instanceof File) {
        filename = uuidv4();

        // Save the uploaded file temporarily
        const tempFilePath = `/tmp/${filename}.pdf`;
        const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());
        await fs.writeFile(tempFilePath, fileBuffer);

        // Parse the file using LlamaParseReader
        const reader =  new LlamaParseReader({ resultType: 'markdown', apiKey: process.env.LLAMAPARSE_API });
        const documents = await reader.loadData(tempFilePath);
        const textContent = documents.map((doc: any) => doc.text || '').join('\n');

        // Clean up the temporary file
        await fs.unlink(tempFilePath);

        // Split the parsed text into chunks using LangChain
        const splitter = new RecursiveCharacterTextSplitter({
          chunkSize: 1000,
          chunkOverlap: 200,
        });
        const chunks = await splitter.createDocuments([textContent]);

        // Return the chunks as the response
        return NextResponse.json({ success: true, chunks });
      } else {
        console.error('Uploaded file is not in the expected format.');
        return NextResponse.json(
          { error: 'Invalid file format' },
          { status: 400 }
        );
      }
    } else {
      console.error('No files uploaded.');
      return NextResponse.json(
        { error: 'No files uploaded' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error',},
      { status: 500 }
    );
  }
}