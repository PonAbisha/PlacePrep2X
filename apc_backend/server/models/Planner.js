import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  done: {
    type: Boolean,
    default: false,
  },
});

const plannerSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    week_start: {
      type: String,
      required: true,
    },

    tasks: [taskSchema],
  },
  {
    timestamps: true,
  }
);

plannerSchema.index(
  { user_id: 1, week_start: 1 },
  { unique: true }
);

export default mongoose.model("Planner", plannerSchema);