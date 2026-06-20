import mongoose from "mongoose";

const aptitudeStudyQuestionSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  difficulty: { type: String, required: true },
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  explanation: { type: String, required: true },
  sourceBook: { type: String },
}, { timestamps: true });

export default mongoose.model("AptitudeStudyQuestion", aptitudeStudyQuestionSchema);