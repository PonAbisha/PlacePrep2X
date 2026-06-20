import mongoose from "mongoose";
import "./env.js";

const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/placement_coach";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    if (error.code === "ECONNREFUSED") {
      console.error(
        "MongoDB is not running. Start MongoDB with: mongod"
      );
    }
    process.exit(1);
  }
};

export default mongoose;
