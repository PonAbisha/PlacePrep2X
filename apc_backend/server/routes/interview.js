import express from "express";

import {
  saveSession,
  getSessions,
  getSession,
  getStats,
  evaluateAnswer,
} from "../controllers/interviewController.js";

import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.use(authenticate);

router.post("/session", saveSession);

router.post("/evaluate", evaluateAnswer);

router.get("/sessions", getSessions);
router.get("/sessions/:id", getSession);

router.get("/stats", getStats);

export default router;