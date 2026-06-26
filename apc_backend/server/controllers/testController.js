import { generateAICompletion } from "../services/aiService.js";
import TestAttempt from "../models/TestAttempt.js";

export const generateAITest = async (req, res, next) => {
  try {
    const { topic, difficulty, category } = req.query;

    if (!topic || !difficulty || !category) {
      return res.status(400).json({ error: "Topic, difficulty, and category are required" });
    }

    const systemPrompt = `You are an expert ${category === 'core' ? 'Computer Science' : 'Aptitude'} instructor.
Generate 5 fresh, placement-level multiple-choice questions for the topic: "${topic}" at "${difficulty}" difficulty.
Requirements:
1. Never use questions from standard textbooks like R.S. Aggarwal or common online banks.
2. Questions must be challenging and reflect current Tier-1/Tier-2 company placement standards.
3. Return ONLY a valid JSON array of objects. No markdown, no extra text.

Each object structure:
{
  "question": "string",
  "options": ["string", "string", "string", "string"],
  "correctAnswer": 0-3 (index),
  "explanation": "string"
}`;

    const responseText = await generateAICompletion(systemPrompt, [
      { role: "user", content: `Generate 5 ${difficulty} questions for ${topic}.` }
    ], false);

    let questions;
    try {
      const cleanText = responseText.replace(/```json|```/g, "").trim();
      questions = JSON.parse(cleanText);
    } catch (err) {
      console.error("Failed to parse AI Test JSON:", responseText);
      return res.status(500).json({ error: "Failed to generate valid test questions" });
    }

    res.json({ questions });
  } catch (err) {
    next(err);
  }
};

export const submitTestAttempt = async (req, res, next) => {
  try {
    const { category, topic, difficulty, score, total_qs, time_spent, evaluations } = req.body;

    const attempt = await TestAttempt.create({
      user_id: req.user.id,
      category,
      topic,
      difficulty,
      score,
      total_qs,
      time_spent,
      evaluations
    });

    res.status(201).json({ success: true, attemptId: attempt._id });
  } catch (err) {
    next(err);
  }
};