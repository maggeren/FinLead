import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: [true, "Please add email"], unique: true },
  password: {
    type: String,
    required: [true, "Please add Password"],
  },
  userName: {
    type: String,
    required: [true, "Please add userName"],
    unique: true,
  },
  createdAt: String,
  //comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});
const User = mongoose.model("User", userSchema);

export default User;
