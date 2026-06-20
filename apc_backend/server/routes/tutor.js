import express from "express";

import {
  chat,
  getConversations,
  getConversation,
  deleteConversation,
} from "../controllers/tutorController.js";

import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.use(authenticate);

router.post("/chat", chat);

router.get("/conversations", getConversations);

router.get("/conversations/:id", getConversation);

router.delete("/conversations/:id", deleteConversation);

export default router;