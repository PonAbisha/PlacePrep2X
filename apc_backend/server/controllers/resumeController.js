import ResumeAnalysis from "../models/Resume.js";
import { analyzeResumeAI } from "../services/resumeService.js";
import PDFParser from "pdf2json";
// ── POST /api/resume/analyze ──────────────────────────────────
export const analyzeResume = async (req, res, next) => {
  try {
    const { resume_text } = req.body;

    if (!resume_text?.trim()) {
      return res.status(400).json({
        error: "resume_text is required",
      });
    }

    const result = await analyzeResumeAI(resume_text.trim());

    const analysis = await ResumeAnalysis.create({
      user_id: req.user.id,
      resume_text: resume_text.trim(),
      overall_score: result.score,
      ats_score: result.ats_score,
      verdict: result.verdict,
      strengths: result.strengths,
      gaps: result.gaps,
      missing_skills: result.missing_skills,
      recommendations: result.recommendations,
    });

    res.status(201).json({
      analysis,
    });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/resume/history ───────────────────────────────────
export const getResumeHistory = async (req, res, next) => {
  try {
    const history = await ResumeAnalysis.find({
      user_id: req.user.id,
    })
      .sort({ createdAt: -1 })
      .limit(10)
      .select("overall_score ats_score verdict createdAt");

    res.json({ history });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/resume/:id ───────────────────────────────────────
export const getResumeAnalysis = async (req, res, next) => {
  try {
    const analysis = await ResumeAnalysis.findOne({
      _id: req.params.id,
      user_id: req.user.id,
    });

    if (!analysis) {
      return res.status(404).json({ error: "Analysis not found" });
    }

    res.json({ analysis });
  } catch (err) {
    next(err);
  }
};

// ── DELETE /api/resume/:id ────────────────────────────────────
export const deleteResumeAnalysis = async (req, res, next) => {
  try {
    const analysis = await ResumeAnalysis.findOneAndDelete({
      _id: req.params.id,
      user_id: req.user.id,
    });

    if (!analysis) {
      return res.status(404).json({ error: "Analysis not found" });
    }

    res.json({ message: "Analysis deleted successfully" });
  } catch (err) {
    next(err);
  }
};