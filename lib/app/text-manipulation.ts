import { LlamaParseReader } from 'llamaindex';

export async function extractTextFromFile(filePath: string): Promise<string> {
  const reader = new LlamaParseReader({ resultType: 'markdown', apiKey: process.env.LLAMAPARSE_API });
  const documents = await reader.loadData(filePath);
  return documents.map((doc: any) => doc.text || '').join('\n');
}