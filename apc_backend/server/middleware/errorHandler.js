import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: "Validation failed",
      details: errors.array().map((e) => ({
        field: e.path,
        message: e.msg,
      })),
    });
  }

  next();
};

export const errorHandler = (err, req, res, next) => {
  console.log("\n================ ERROR =================");
  console.error(err);
  console.log("========================================\n");

  // MongoDB Duplicate Key Error
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    return res.status(409).json({
      error: `${field} already exists`,
    });
  }

  // MongoDB Validation Error
  if (err.name === "ValidationError") {
    const details = Object.values(err.errors).map((e) => ({
      field: e.path,
      message: e.message,
    }));
    return res.status(422).json({
      error: "Validation failed",
      details,
    });
  }

  // MongoDB Cast Error (Invalid ID format)
  if (err.name === "CastError") {
    return res.status(400).json({
      error: "Invalid ID format",
    });
  }

  // MongoDB Connection Errors
  if (
    err.name === "MongoNetworkError" ||
    err.message?.includes("MongoDB") ||
    err.message?.includes("ECONNREFUSED")
  ) {
    return res.status(503).json({
      error:
        "Database unavailable. Make sure MongoDB is running on localhost:27017",
    });
  }

  const status = err.status || 500;

  res.status(status).json({
    error: err.message || "Internal server error",
    stack:
      process.env.NODE_ENV === "development"
        ? err.stack
        : undefined,
  });
};

export const notFound = (req, res) => {
  res.status(404).json({
    error: `Route ${req.method} ${req.path} not found`,
  });
};
