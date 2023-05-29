import Comment from "../../models/Comment.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const saveComment = async(data:any) => {
    // console.log("Going to save comment");
    // const content = req.body.content
    // const user = req.body.user;
    // console.log(content);
    // console.log("Userreference is " + user);
    // console.log("parametre er" + req.params);
    // const tickerRef = req.params.ticker;
    // console.log("tickerRef er " + tickerRef)
    // const parent = req.body.parent ?? null;
    // console.log(parent);
    const comment = new Comment({
        content: data.comment,
        createdAt: new Date().toLocaleDateString("en-GB"),
        tickerReference: data.tickerRef,
        userReference: data.user,
        likes: 0,
        //parent: "null"
    });
    await comment.save();
    console.log("Saved new comment to the database")
   // res.status(200).json("New user added")
};

const getCommentsByTicker= async(ticker: any)=>{
      const commments = await Comment.find({tickerReference: ticker});
      return commments;
}

const getComments = async(req:any, res:any) =>{
    const ticker = req.params.ticker;
    const comments = await Comment.find({tickerReference: ticker});
   // console.log(comments);
    res.status(200).json(comments);
}

const getReplies = async(req: any, res:any)=>{
    console.log("Så henter vi svar!");
    const parent = await Comment.findById({_id:req.params.parent});
    console.log(parent);
    const replies = await Comment.find({parent: parent});
  //  console.log(replies);
    res.status(200).json(replies);
}

const updateComment = async(req:any,res:any) =>{
    console.log("Så kører vi!");
    const { id, content } = req.body;
    console.log(id, "will be passed");
    console.log(content);
  
    try {
      const comment = await Comment.findById(id);
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      comment.content = content;
      await comment.save();
      res.status(200).json("Comment updated with new content!");
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error updating comment" });
    }
}

const deleteComment = async(req:any, res:any) =>{
    console.log("Nu kører vi ");
    const comment = req.body.id;
    console.log(comment);
    Comment.findByIdAndDelete(comment, (err:any, document:any)=>{
       if(!err){
        console.log("Comment just got deleted!");
       }
    })
    res.status(200).json("Her er din kommentar");
}

export const commentController = {saveComment, getComments, getCommentsByTicker, updateComment, deleteComment, getReplies}