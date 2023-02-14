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
const User = mongoose.model("User", userSchema);
export default User;
