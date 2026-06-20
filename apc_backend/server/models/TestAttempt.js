import mongoose from "mongoose";

const testAttemptSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category: { type: String, enum: ["aptitude", "core"], required: true },
  topic: { type: String, required: true },
  difficulty: { type: String, required: true },
  score: { type: Number, required: true },
  total_qs: { type: Number, required: true },
  time_spent: { type: Number }, // in seconds
  evaluations: [{
    question: String,
    selectedAnswer: Number,
    correctAnswer: Number,
    isCorrect: Boolean
  }]
}, { timestamps: true });

testAttemptSchema.index({ user_id: 1, topic: 1 });
testAttemptSchema.index({ user_id: 1, category: 1 });

export default mongoose.model("TestAttempt", testAttemptSchema);