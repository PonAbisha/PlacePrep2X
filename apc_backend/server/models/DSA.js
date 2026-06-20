import mongoose from "mongoose";

const dsaProgressSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    solved: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    completedProblems: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Unique index for user + topic combination
dsaProgressSchema.index({ user_id: 1, topic: 1 }, { unique: true });

export default mongoose.model("DSAProgress", dsaProgressSchema);