import express from "express";
import upload from "../middleware/upload.js";
import {
  analyzeResume,
  getResumeHistory,
  getResumeAnalysis,
  deleteResumeAnalysis,
} from "../controllers/resumeController.js";

import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.use(authenticate);

router.post(
  "/analyze",
  upload.single("resume"),
  analyzeResume
);

router.get("/history", getResumeHistory);

router.get("/:id", getResumeAnalysis);

router.delete("/:id", deleteResumeAnalysis);

export default router;