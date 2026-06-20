import mongoose from "mongoose";

const coreStudyQuestionSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  difficulty: { type: String, required: true },
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  explanation: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("CoreStudyQuestion", coreStudyQuestionSchema);