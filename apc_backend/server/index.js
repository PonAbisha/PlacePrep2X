import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import "./config/env.js";
import { connectDB } from "./config/mongodb.js";


import authRoutes from "./routes/auth.js";
import dsaRoutes from "./routes/dsa.js";
import interviewRoutes from "./routes/interview.js";
import tutorRoutes from "./routes/tutor.js";
import resumeRoutes from "./routes/resume.js";
import plannerRoutes from "./routes/planner.js";
import analyticsRoutes from "./routes/analytics.js";
import coreRoutes from "./routes/core.js";
import aptitudeRoutes from "./routes/aptitude.js";

import {
  errorHandler,
  notFound,
} from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ─────────────────────────────────────────────
// Trust proxy (Render / Railway / Vercel)
// ─────────────────────────────────────────────
app.set("trust proxy", 1);

// ─────────────────────────────────────────────
// Security
// ─────────────────────────────────────────────
app.use(helmet());

// ─────────────────────────────────────────────
// CORS
// ─────────────────────────────────────────────
app.use(
  cors({
    origin:
      process.env.CLIENT_URL ||
      "http://localhost:3000",

    credentials: true,

    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

// ─────────────────────────────────────────────
// Rate Limiters
// ─────────────────────────────────────────────
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
});

const aiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 15,
  message: {
    error:
      "AI rate limit exceeded. Please wait a minute.",
  },
});

app.use(globalLimiter);

// ─────────────────────────────────────────────
// Body Parsers
// ─────────────────────────────────────────────
app.use(
  express.json({
    limit: "1mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

// ─────────────────────────────────────────────
// Logger
// ─────────────────────────────────────────────
if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}

// ─────────────────────────────────────────────
// Root Route
// ─────────────────────────────────────────────
app.get("/", (_req, res) => {
  res.json({
    name: "AI Placement Coach API",
    version: "1.0.0",
    status: "running",
  });
});

// ─────────────────────────────────────────────
// Health Check
// ─────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "AI Placement Coach API",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

// ─────────────────────────────────────────────
// Routes
// ─────────────────────────────────────────────
app.use("/api/auth", authRoutes);

app.use("/api/core", coreRoutes);

app.use("/api/aptitude", aptitudeRoutes);

app.use("/api/dsa", dsaRoutes);

app.use(
  "/api/interview",
  aiLimiter,
  interviewRoutes
);

app.use(
  "/api/tutor",
  aiLimiter,
  tutorRoutes
);

app.use(
  "/api/resume",
  aiLimiter,
  resumeRoutes
);

app.use(
  "/api/planner",
  plannerRoutes
);

app.use(
  "/api/analytics",
  analyticsRoutes
);

// ─────────────────────────────────────────────
// 404 Handler
// ─────────────────────────────────────────────
app.use(notFound);

// ─────────────────────────────────────────────
// Global Error Handler
// ─────────────────────────────────────────────
app.use(errorHandler);

// ─────────────────────────────────────────────
// Start Server
// ─────────────────────────────────────────────
let server;

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    server = app.listen(PORT, () => {
      console.log(`
╔════════════════════════════════════════════╗
║       AI Placement Coach Backend          ║
╠════════════════════════════════════════════╣
║ URL: http://localhost:${PORT}
║ ENV: ${process.env.NODE_ENV || "development"}
╚════════════════════════════════════════════╝
`);
    });

    // ─────────────────────────────────────────────
    // Graceful Shutdown
    // ─────────────────────────────────────────────
    process.on("SIGTERM", () => {
      console.log("SIGTERM received");

      server.close(() => {
        console.log("Server closed");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

process.on("SIGINT", () => {
  console.log("SIGINT received");

  if (server) {
    server.close(() => {
      console.log("Server closed");
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});

// ─────────────────────────────────────────────
// Error Monitoring
// ─────────────────────────────────────────────
process.on(
  "uncaughtException",
  (err) => {
    console.error(
      "Uncaught Exception:",
      err
    );
  }
);

process.on(
  "unhandledRejection",
  (err) => {
    console.error(
      "Unhandled Rejection:",
      err
    );
  }
);

export default app;
