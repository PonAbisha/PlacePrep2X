import bcrypt from "bcryptjs";
import User from "../models/User.js";
import RefreshToken from "../models/RefreshToken.js";
import DSAProgress from "../models/DSA.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../middleware/auth.js";
import jwt from "jsonwebtoken";
import { requireEnv } from "../config/env.js";

const normalizeEmail = (email) => email.trim().toLowerCase();

// ── POST /api/auth/register ──────────────────────────────────
export const register = async (req, res, next) => {
  try {
    const { name, email, password, college, branch, year } = req.body;
    const normalizedEmail = normalizeEmail(email);
    const password_hash = await bcrypt.hash(password, 12);

    const dsaTopics = [
      ["Arrays", 50],
      ["Strings", 40],
      ["Linked Lists", 30],
      ["Trees", 50],
      ["Graphs", 50],
      ["Dynamic Programming", 52],
      ["Backtracking", 30],
      ["Heaps", 20],
      ["Two Pointers", 18],
      ["Sorting & Searching", 25],
    ];

    // Check if email already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      const error = new Error("Email already registered");
      error.status = 409;
      throw error;
    }

    // Create user
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password_hash,
      college: college?.trim() || null,
      branch: branch || "CSE",
      year: year || 4,
    });

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Store refresh token
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    await RefreshToken.create({
      user_id: user._id,
      token: refreshToken,
      expires_at: expiresAt,
    });

    // Create DSA progress entries
    const initialDSA = dsaTopics.map(([topic, total]) => ({
      user_id: user._id,
      topic,
      solved: 0,
      total,
    }));
    await DSAProgress.insertMany(initialDSA);

    // Remove password from response
    const userResponse = user.toObject();
    delete userResponse.password_hash;

    res.status(201).json({
      message: "Registration successful",
      user: userResponse,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    next(err);
  }
};

// ── POST /api/auth/login ─────────────────────────────────────
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = normalizeEmail(email);

    // Find user and include password for comparison
    const user = await User.findOne({ email: normalizedEmail }).select(
      "+password_hash"
    );

    if (!user) {
      return res
        .status(401)
        .json({ error: "Invalid email or password" });
    }

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return res
        .status(401)
        .json({ error: "Invalid email or password" });
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Store refresh token
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    await RefreshToken.create({
      user_id: user._id,
      token: refreshToken,
      expires_at: expiresAt,
    });

    // Remove password from response
    const userResponse = user.toObject();
    delete userResponse.password_hash;

    res.json({
      message: "Login successful",
      user: userResponse,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    next(err);
  }
};

// ── POST /api/auth/refresh ───────────────────────────────────
export const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({ error: "Refresh token required" });
    }

    // Verify token signature
    const decoded = jwt.verify(
      refreshToken,
      requireEnv("JWT_REFRESH_SECRET")
    );

    // Check DB
    const tokenDoc = await RefreshToken.findOne({
      token: refreshToken,
      expires_at: { $gt: new Date() },
    });

    if (!tokenDoc) {
      return res
        .status(401)
        .json({ error: "Invalid or expired refresh token" });
    }

    // Rotate: delete old, issue new
    await RefreshToken.deleteOne({ token: refreshToken });

    const newAccessToken = generateAccessToken(decoded.userId);
    const newRefreshToken = generateRefreshToken(decoded.userId);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    await RefreshToken.create({
      user_id: decoded.userId,
      token: newRefreshToken,
      expires_at: expiresAt,
    });

    res.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid refresh token" });
    }
    next(err);
  }
};

// ── POST /api/auth/logout ────────────────────────────────────
export const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (refreshToken) {
      await RefreshToken.deleteOne({ token: refreshToken });
    }
    res.json({ message: "Logged out successfully" });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/auth/me ─────────────────────────────────────────
export const getMe = async (req, res) => {
  res.json({ user: req.user });
};

// ── PATCH /api/auth/me ───────────────────────────────────────
export const updateMe = async (req, res, next) => {
  try {
    const { name, college, branch, year, leetcode_username } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          ...(name && { name }),
          ...(college && { college }),
          ...(branch && { branch }),
          ...(year && { year }),
          ...(leetcode_username && { leetcode_username }),
        },
      },
      { new: true }
    );

    const userResponse = user.toObject();
    delete userResponse.password_hash;

    res.json({ user: userResponse });
  } catch (err) {
    next(err);
  }
};
