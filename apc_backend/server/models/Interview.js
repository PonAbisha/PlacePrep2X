import mongoose from "mongoose";

const interviewSessionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["technical", "hr"],
      required: true,
    },
    avg_score: {
      type: Number,
      min: 0,
      max: 100,
    },
    total_qs: {
      type: Number,
      default: 0,
    },
    evaluations: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

interviewSessionSchema.index({ user_id: 1 });

export default mongoose.model("InterviewSession", interviewSessionSchema);