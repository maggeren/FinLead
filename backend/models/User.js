import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: { type: String, required: [true, "Please add email"], unique: true },
  password: {
    type: String,
    required: [true, "Please add Password"],
    unique: true,
  },
  userName: {
    type: String,
    required: [true, "Please add userName"],
    unique: true,
  },
});
