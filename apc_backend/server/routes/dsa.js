import express from "express";

import {
  getDSAProgress,
  updateDSATopic,
  getDSAStats,
} from "../controllers/dsaController.js";

import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.use(authenticate);

router.get("/", getDSAProgress);
router.get("/stats", getDSAStats);
router.patch("/:topic", updateDSATopic);

export default router;