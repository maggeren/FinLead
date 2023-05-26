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
  description: {
    type: String,
    required: false,
  },
  followers: {
    //array of user ids
    type: [String],
    required: false,
  },
  following: {
    //array of user ids
    type: [String],
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  picture: {
    type: String,
    required: false,
  },
  replies: {
    type: [String],
    required: false,
  },
  posts: {
    type: [String],
    required: false,
  },
  liked: {
    type: [String],
    required: false,
  },
  createdAt: String,
  //comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});
const User = mongoose.model("User", userSchema);

export default User;
