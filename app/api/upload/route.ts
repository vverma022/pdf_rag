import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { saveTempFile } from '@/lib/app/file'
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
    
   console.log('Yaha pouch gaya bsdk', tempFilePath);

    const chunks = await axios.post('http://localhost:3000/tmani', {
      tempFilePath
    });

    return NextResponse.json({ success: true, chunks: chunks.data.chunks });
  } catch (error) {
    console.error('Error during file upload:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}