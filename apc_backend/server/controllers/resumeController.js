import ResumeAnalysis from "../models/Resume.js";
import { analyzeResumeAI } from "../services/resumeService.js";
import { query } from "../config/db.js";

// ── POST /api/resume/analyze ──────────────────────────────────
export const analyzeResume = async (req, res, next) => {
  try {
    const { resume_text } = req.body;

    if (!resume_text?.trim()) {
      return res.status(400).json({ error: "resume_text is required" });
    }

    // Call AI service (Ollama → Claude fallback)
    const result = await analyzeResumeAI(resume_text.trim());

    // Persist to DB
    const { rows } = await query(
      `INSERT INTO resume_analyses
         (user_id, resume_text, overall_score, ats_score, verdict, strengths, gaps, missing_skills, recommendations)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING id, overall_score, ats_score, verdict, created_at`,
      [
        req.user.id,
        resume_text.trim(),
        result.score,
        result.ats_score,
        result.verdict,
        JSON.stringify(result.strengths || []),
        JSON.stringify(result.gaps || []),
        JSON.stringify(result.missing_skills || []),
        JSON.stringify(result.recommendations || []),
      ]
    );

    res.status(201).json({
      analysis: {
        id: rows[0].id,
        ...result,
        created_at: rows[0].created_at,
      },
    });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/resume/history ───────────────────────────────────
export const getResumeHistory = async (req, res, next) => {
  try {
    const { rows } = await query(
      `SELECT id, overall_score, ats_score, verdict, created_at
       FROM resume_analyses
       WHERE user_id = $1
       ORDER BY created_at DESC
       LIMIT 10`,
      [req.user.id]
    );
    res.json({ history: rows });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/resume/:id ───────────────────────────────────────
export const getResumeAnalysis = async (req, res, next) => {
  try {
    const { rows } = await query(
      `SELECT id, overall_score, ats_score, verdict, strengths, gaps, missing_skills, recommendations, created_at
       FROM resume_analyses
       WHERE id = $1 AND user_id = $2`,
      [req.params.id, req.user.id]
    );
    if (!rows.length) {
      return res.status(404).json({ error: "Analysis not found" });
    }
    res.json({ analysis: rows[0] });
  } catch (err) {
    next(err);
  }
};

// ── DELETE /api/resume/:id ────────────────────────────────────
export const deleteResumeAnalysis = async (req, res, next) => {
  try {
    await query(
      `DELETE FROM resume_analyses WHERE id = $1 AND user_id = $2`,
      [req.params.id, req.user.id]
    );
    res.json({ message: "Analysis deleted successfully" });
  } catch (err) {
    next(err);
  }
};