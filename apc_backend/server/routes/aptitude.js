import express from "express";
import { getAptitudeQuestions } from "../controllers/studyController.js";
import { generateAITest, submitTestAttempt } from "../controllers/testController.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

// Route: GET /api/aptitude/study/:topic
router.get("/study/:topic", getAptitudeQuestions);

router.get("/test/generate", authenticate, generateAITest);
router.post("/test/submit", authenticate, submitTestAttempt);

export default router;