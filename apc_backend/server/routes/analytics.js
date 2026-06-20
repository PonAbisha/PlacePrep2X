import express from "express";

import {
  getAnalyticsOverview,
} from "../controllers/analyticsController.js";

import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.use(authenticate);

router.get("/overview", getAnalyticsOverview);

export default router;