import InterviewSession from "../models/Interview.js";
import { generateAICompletion } from "../services/aiService.js";

// ── POST /api/interview/session ──────────────────────────────
// Save a completed interview session
export const saveSession = async (req, res, next) => {
  try {
    const { type, evaluations } = req.body;

    if (!type || !Array.isArray(evaluations) || !evaluations.length) {
      return res.status(400).json({ error: "type and evaluations[] required" });
    }

    const avg_score = parseFloat(
      (evaluations.reduce((s, e) => s + (e.score || 0), 0) / evaluations.length).toFixed(1)
    );

    const session = await InterviewSession.create({
      user_id: req.user.id,
      type,
      avg_score,
      total_qs: evaluations.length,
      evaluations
    });

    res.status(201).json({ session });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/interview/sessions ──────────────────────────────
export const getSessions = async (req, res, next) => {
  try {
    const { type, limit = 10, offset = 0 } = req.query;

    const filter = { user_id: req.user.id };

    if (type) {
      filter.type = type;
    }

    const sessions = await InterviewSession.find(filter)
      .sort({ createdAt: -1 })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .select("type avg_score total_qs createdAt");

    res.json({ sessions });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/interview/sessions/:id ─────────────────────────
export const getSession = async (req, res, next) => {
  try {
    const session = await InterviewSession.findOne({
      _id: req.params.id,
      user_id: req.user.id,
    });

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    res.json({ session });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/interview/stats ─────────────────────────────────
export const getStats = async (req, res, next) => {
  try {
    const sessions = await InterviewSession.find({
      user_id: req.user.id,
    });

    const total_sessions = sessions.length;

    const overall_avg =
      total_sessions > 0
        ? (
            sessions.reduce((sum, s) => sum + s.avg_score, 0) /
            total_sessions
          ).toFixed(1)
        : 0;

    const best_score =
      total_sessions > 0
        ? Math.max(...sessions.map((s) => s.avg_score))
        : 0;

    const technical_count = sessions.filter(
      (s) => s.type === "technical"
    ).length;

    const hr_count = sessions.filter(
      (s) => s.type === "hr"
    ).length;

    res.json({
      stats: {
        total_sessions,
        overall_avg,
        best_score,
        technical_count,
        hr_count,
      },
    });
  } catch (err) {
    next(err);
  }
};
// ── POST /api/interview/evaluate ─────────────────────────────
// Evaluate candidate's technical/HR answer
export const evaluateAnswer = async (req, res, next) => {
  try {
    const { question, answer, type } = req.body;
    if (!question || !answer) {
      return res.status(400).json({ error: "question and answer required" });
    }

    const systemPrompt = `You are a strict but fair ${type === "hr" ? "HR" : "technical"} interviewer for Indian campus placements.
Evaluate the candidate's answer. Return ONLY valid JSON (no markdown block, no extra text):
{"score":<1-10>,"verdict":"<Excellent|Good|Average|Needs Improvement>","strengths":"<1-2 sentences>","improvements":"<1-2 sentences>","model_answer":"<2-3 sentence ideal answer>"}`;

    const messages = [
      {
        role: "user",
        content: `Interview Question: "${question}"\n\nCandidate Answer: "${answer}"\n\nEvaluate this answer.`,
      },
    ];

    const responseText = await generateAICompletion(systemPrompt, messages, true);

    let evaluation;
    try {
      const cleanText = responseText.replace(/```json|```/g, "").trim();
      evaluation = JSON.parse(cleanText);
    } catch (err) {
      console.error("[Interview Controller] Failed to parse evaluation JSON:", responseText);
      evaluation = {
        score: 5,
        verdict: "Average",
        strengths: "The candidate attempted the question.",
        improvements: "Please try to structure your answer with more specific details.",
        model_answer: "Refer to textbook definitions for the core CS concepts requested."
      };
    }

    res.json({ evaluation });
  } catch (err) {
    next(err);
  }
};
