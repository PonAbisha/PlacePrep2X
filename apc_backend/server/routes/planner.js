import express from "express";

import {
  getPlanner,
  toggleTask,
  generatePlan,
} from "../controllers/plannerController.js";

import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.use(authenticate);

router.get("/", getPlanner);

router.post("/generate", generatePlan);

router.patch("/:taskId", toggleTask);

export default router;