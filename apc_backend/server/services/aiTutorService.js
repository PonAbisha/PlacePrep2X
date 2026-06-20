import { generateAICompletion } from "./aiService.js";

export const askTutorAI = async (messages) => {
  const systemPrompt = `
You are an AI Placement Coach.

Help with:
- DSA
- DBMS
- OS
- CN
- OOP
- Aptitude
- Reasoning
- Placement interviews

Keep answers concise, practical, and structured. Use Markdown formatting.
`;

  return generateAICompletion(systemPrompt, messages);
};