import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Content cannot be empty"]
    },
    createdAt: String,
    tickerReference: String,
    userReference: String,
    likes: {
        type: [String],
        default: [] // Set the default value to an empty array 
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }
});
const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
