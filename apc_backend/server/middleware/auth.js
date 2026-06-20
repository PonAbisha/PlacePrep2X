import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { requireEnv } from "../config/env.js";

// ── Verify JWT access token ──────────────────────────────────
export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, requireEnv("JWT_SECRET"));

    // Verify user still exists
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired", code: "TOKEN_EXPIRED" });
    }
    return res.status(401).json({ error: "Invalid token" });
  }
};

// ── Generate tokens ──────────────────────────────────────────
export const generateAccessToken = (userId) =>
  jwt.sign({ userId }, requireEnv("JWT_SECRET"), {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });

export const generateRefreshToken = (userId) =>
  jwt.sign({ userId, type: "refresh" }, requireEnv("JWT_REFRESH_SECRET"), {
    expiresIn: "30d",
  });
