import mongoose from "mongoose";

const resumeAnalysisSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    resume_text: {
      type: String,
      required: true,
    },
    overall_score: {
      type: Number,
      min: 0,
      max: 100,
    },
    ats_score: {
      type: Number,
      min: 0,
      max: 100,
    },
    verdict: {
      type: String,
    },
    strengths: {
      type: mongoose.Schema.Types.Mixed,
    },
    gaps: {
      type: mongoose.Schema.Types.Mixed,
    },
    missing_skills: {
      type: mongoose.Schema.Types.Mixed,
    },
    recommendations: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

resumeAnalysisSchema.index({ user_id: 1 });

export default mongoose.model("ResumeAnalysis", resumeAnalysisSchema);