import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name must be 100 characters or fewer"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
    },
    password_hash: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },
    college: {
      type: String,
      trim: true,
    },
    branch: {
      type: String,
      default: "CSE",
    },
    year: {
      type: Number,
      min: 1,
      max: 4,
      default: 4,
    },
    leetcode_username: {
      type: String,
      sparse: true,
    },
    avatar_url: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ email: 1 });

export default mongoose.model("User", userSchema);