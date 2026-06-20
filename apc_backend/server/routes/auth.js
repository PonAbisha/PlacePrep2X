import express from "express";
import { body } from "express-validator";

import {
  register,
  login,
  refresh,
  logout,
  getMe,
  updateMe,
} from "../controllers/authController.js";

import { authenticate } from "../middleware/auth.js";
import { validate } from "../middleware/errorHandler.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ max: 100 })
      .withMessage("Name must be 100 characters or fewer"),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Enter a valid email address"),
    body("password")
      .isString()
      .isLength({ min: 6, max: 128 })
      .withMessage("Password must be between 6 and 128 characters"),
    body("year")
      .optional()
      .isInt({ min: 1, max: 4 })
      .withMessage("Year must be between 1 and 4")
      .toInt(),
  ],
  validate,
  register
);

router.post(
  "/login",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Enter a valid email address"),
    body("password").isString().notEmpty().withMessage("Password is required"),
  ],
  validate,
  login
);
router.post("/refresh", refresh);
router.post("/logout", logout);

router.get("/me", authenticate, getMe);
router.patch("/me", authenticate, updateMe);

export default router;
