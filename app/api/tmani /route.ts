import { NextRequest, NextResponse } from 'next/server';
import { extractTextFromFile } from '@/lib/app/text-manipulation';
import { deleteTempFile } from '@/lib/app/file';
import { chunkText } from '@/lib/app/chunking';

export async function POST(req: NextRequest) {
  try {
    const {tempFilePath} = await req.json();

    if (!tempFilePath) {
      return NextResponse.json({ error: 'No valid file uploaded' }, { status: 400 });
    }
    
    const textContent = await extractTextFromFile(tempFilePath);

    
    await deleteTempFile(tempFilePath);

    const chunks = await chunkText(textContent);

    
    return NextResponse.json({ success: true, chunks });
  } catch (error) {
    console.error('Error during processing:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}