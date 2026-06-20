import InterviewSession from "../models/Interview.js";
import { generateAICompletion } from "../services/aiService.js";
import { query } from "../config/db.js";

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

    // Save to PostgreSQL for analytics
    await query(
      `INSERT INTO interview_sessions (user_id, type, avg_score, total_qs, evaluations)
       VALUES ($1, $2, $3, $4, $5)`,
      [req.user.id, type, avg_score, evaluations.length, JSON.stringify(evaluations)]
    );

    res.status(201).json({ session });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/interview/sessions ──────────────────────────────
export const getSessions = async (req, res, next) => {
  try {
    const { type, limit = 10, offset = 0 } = req.query;

    const params = [req.user.id, parseInt(limit), parseInt(offset)];
    let typeClause = "";
    if (type) { params.push(type); typeClause = `AND type = $${params.length}`; }

    const { rows } = await query(
      `SELECT id, type, avg_score, total_qs, created_at
       FROM interview_sessions
       WHERE user_id = $1 ${typeClause}
       ORDER BY created_at DESC
       LIMIT $2 OFFSET $3`,
      params
    );
    res.json({ sessions: rows });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/interview/sessions/:id ─────────────────────────
export const getSession = async (req, res, next) => {
  try {
    const { rows } = await query(
      `SELECT * FROM interview_sessions WHERE id = $1 AND user_id = $2`,
      [req.params.id, req.user.id]
    );
    if (!rows.length) return res.status(404).json({ error: "Session not found" });
    res.json({ session: rows[0] });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/interview/stats ─────────────────────────────────
export const getStats = async (req, res, next) => {
  try {
    const { rows } = await query(
      `SELECT
         COUNT(*) AS total_sessions,
         ROUND(AVG(avg_score), 1) AS overall_avg,
         MAX(avg_score) AS best_score,
         COUNT(*) FILTER (WHERE type = 'technical') AS technical_count,
         COUNT(*) FILTER (WHERE type = 'hr') AS hr_count
       FROM interview_sessions
       WHERE user_id = $1`,
      [req.user.id]
    );
    res.json({ stats: rows[0] });
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
