import dotenv from "dotenv";
dotenv.config();

/**
 * Unified AI completion service that attempts to call a local Ollama instance
 * and falls back to the Anthropic Claude API if Ollama is unavailable.
 * 
 * @param {string} systemPrompt - Instruction prompt for the AI system behavior.
 * @param {Array<{role: string, content: string}>} messages - Prior conversation history.
 * @param {boolean} jsonMode - Ensure response is valid JSON (supported by Ollama format).
 * @returns {Promise<string>} - Text content of the completion.
 */
export const generateAICompletion = async (systemPrompt, messages, jsonMode = false) => {
  const ollamaHost = process.env.OLLAMA_HOST || "http://localhost:11434";
  const configuredOllamaModel = process.env.OLLAMA_MODEL || "qwen2.5-coder:7b";
  const ollamaModel = configuredOllamaModel === "qwen2.5-coder"
    ? "qwen2.5-coder:7b"
    : configuredOllamaModel;
  const useOllama = process.env.USE_OLLAMA !== "false"; // Defaults to true if not explicitly false

  if (useOllama) {
    try {
      if (configuredOllamaModel !== ollamaModel) {
        console.log(
          `[AI Service] Normalized OLLAMA_MODEL from ${configuredOllamaModel} to ${ollamaModel}.`
        );
      }
      console.log(`[AI Service] Attempting completion with Ollama (${ollamaModel}) at ${ollamaHost}...`);
      
      const formattedMessages = [
        { role: "system", content: systemPrompt },
        ...messages
      ];

      const body = {
        model: ollamaModel,
        messages: formattedMessages,
        stream: false,
        options: {
          temperature: 0.7,
        }
      };

      if (jsonMode) {
        body.format = "json";
      }

      const response = await fetch(`${ollamaHost}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.warn(
          `[AI Service] Ollama /api/chat failed with status ${response.status} ${response.statusText}. Response body: ${errorBody}`
        );
      } else {
        const data = await response.json();
        const content = data.message?.content;
        if (content) {
          console.log("[AI Service] Ollama response received successfully.");
          return content;
        }
        console.warn(
          `[AI Service] Ollama /api/chat returned empty content. Response body: ${JSON.stringify(data)}`
        );
      }
      console.warn("[AI Service] Falling back to Anthropic...");
    } catch (err) {
      console.warn(`[AI Service] Ollama request failed: ${err.message}. Falling back to Anthropic...`);
    }
  }

  // Fallback: Anthropic Claude API
  if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === "your_claude_api_key") {
    throw new Error("Local Ollama connection failed and ANTHROPIC_API_KEY is not configured in .env");
  }

  console.log("[AI Service] Calling Anthropic Claude API...");
  
  // Format messages for Claude (Claude v1 messages API requires alternating user/assistant messages)
  // System prompt is passed separately
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1500,
      system: systemPrompt,
      messages: messages.map(msg => ({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.content
      })),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Anthropic Claude API failed: ${response.statusText}. Details: ${errorText}`);
  }

  const data = await response.json();
  const text = data.content?.map((item) => item.text || "").join("") || "";
  
  console.log("[AI Service] Anthropic response received successfully.");
  return text;
};
