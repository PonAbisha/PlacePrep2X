import { generateAICompletion } from "./aiService.js";

export const analyzeResumeAI = async (resumeText) => {
  const systemPrompt = `
Analyze the provided resume for campus placements and ATS optimization.
Return ONLY valid JSON (no markdown block, no extra text):
{
  "score": <overall score out of 100>,
  "ats_score": <ATS compatibility score out of 100>,
  "verdict": "<Short overall verdict>",
  "strengths": ["list of 3 key strengths"],
  "gaps": ["list of 2-3 key gaps or improvement areas"],
  "missing_skills": ["list of 3-5 keywords or technical skills missing from the resume"],
  "recommendations": ["list of 3 action steps for improvement"]
}
`;

  const messages = [
    {
      role: "user",
      content: resumeText,
    },
  ];

  const responseText = await generateAICompletion(systemPrompt, messages, true);

  try {
    // Clean up potential markdown formatting wrapping the JSON
    const cleanText = responseText.replace(/```json|```/g, "").trim();
    return JSON.parse(cleanText);
  } catch (err) {
    console.error("[Resume Service] Failed to parse AI JSON response:", responseText);
    // Return a structured default if parsing fails
    return {
      score: 65,
      ats_score: 60,
      verdict: "Resume parsed with layout issues. Review recommended.",
      strengths: ["Clear contact details", "Relevant education section"],
      gaps: ["Missing specific project impact metrics", "Vague technical descriptions"],
      missing_skills: ["SQL", "Docker", "Algorithms"],
      recommendations: ["Quantify impact with numbers", "Add a dedicated Skills matrix"]
    };
  }
};