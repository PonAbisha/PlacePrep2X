import dotenv from "dotenv";
import Groq from "groq-sdk";
dotenv.config();

/**
 * Unified AI completion service powered by Groq.
 *
 * @param {string} systemPrompt - Instruction prompt for the AI system behavior.
 * @param {Array<{role: string, content: string}>} messages - Prior conversation history.
 * @param {boolean} jsonMode - Ensure response is valid JSON.
 * @returns {Promise<string>} - Text content of the completion.
 */
export const generateAICompletion = async (systemPrompt, messages, jsonMode = false) => {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not configured in .env");
  }

  const client = new Groq({ apiKey });

  const effectiveSystemPrompt = jsonMode
    ? `${systemPrompt}\n\nReturn only valid JSON. Do not wrap the response in markdown fences or add any extra text.`
    : systemPrompt;

  const chatMessages = [
    { role: "system", content: effectiveSystemPrompt },
    ...messages.map((message) => ({
      role: message.role === "assistant" ? "assistant" : "user",
      content: message.content,
    })),
  ];

  const response = await client.chat.completions.create({
    model,
    messages: chatMessages,
    temperature: 0.7,
  });

  const text = response?.choices?.[0]?.message?.content || "";

  if (!text) {
    throw new Error("Groq returned an empty response");
  }

  return text;
};
