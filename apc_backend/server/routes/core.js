import express from "express";
import { getCoreQuestions } from "../controllers/studyController.js";
import { generateAITest, submitTestAttempt } from "../controllers/testController.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

// Route: GET /api/core/study/:subject
router.get("/study/:subject", getCoreQuestions);

router.get("/test/generate", authenticate, generateAITest);
router.post("/test/submit", authenticate, submitTestAttempt);

export default router;