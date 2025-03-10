import { promises as fs } from 'fs';

export async function saveTempFile(fileBuffer: Buffer, filename: string): Promise<string> {
  const tempFilePath = `/tmp/${filename}`;
  await fs.writeFile(tempFilePath, fileBuffer);
  return tempFilePath;
}

export async function deleteTempFile(filePath: string): Promise<void> {
  await fs.unlink(filePath);
}