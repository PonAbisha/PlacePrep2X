import express from "express";

import {
  analyzeResume,
  getResumeHistory,
  getResumeAnalysis,
  deleteResumeAnalysis,
} from "../controllers/resumeController.js";

import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.use(authenticate);

router.post("/analyze", analyzeResume);

router.get("/history", getResumeHistory);

router.get("/:id", getResumeAnalysis);

export default router;