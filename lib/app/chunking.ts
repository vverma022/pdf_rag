import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

export async function chunkText(content: string, chunkSize = 1000, chunkOverlap = 200) {
  const splitter = new RecursiveCharacterTextSplitter({ chunkSize, chunkOverlap });
  return splitter.createDocuments([content]);
}