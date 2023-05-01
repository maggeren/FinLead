import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({

   content :{
    type: String,
    required: [true, "Content cannot be empty"]
   },
   createdAt: String,
   tickerReference: String,
   userReference: String,
   likes: Number
})

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;