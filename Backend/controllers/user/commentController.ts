import Comment from "../../models/Comment.js";
import jwt from "jsonwebtoken";

const saveComment = async(req: any, res:any) => {
    console.log("Going to save comment");
    const content = req.body.content
    console.log(content);
    console.log("parametre er" + req.params);
    const tickerRef = req.params.ticker;
    console.log("tickerRef er " + tickerRef)
    // if (!req.headers.authorization) {
    //     return res.status(401).json({ message: "Missing Authorization header" });
    //   }
    // const token = req.headers.authorization.split(" ")[1]; // get the token from the Authorization header
    // const decodedToken = jwt.verify(token, "secretKey"); // decode the token using the secret key
    // console.log("afkoded token er " + decodedToken);
   // const userName = decodedToken.userName; // extract the user id from the token
   // console.log("Navn er " + userName);
    const comment = new Comment({
        content:content,
        createdAt: new Date().toLocaleDateString("en-GB"),
        tickerReference: tickerRef,
        userReference: "Test Kaj",
        likes: 0
    });
    comment.save();
    res.status(200).json("New user added")
};

const getComments = async(req:any, res:any) =>{
    const ticker = req.params.ticker;
    const comments = await Comment.find({tickerReference: ticker});
    console.log(comments);
    res.status(200).json(comments);
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

export const commentController = {saveComment, getComments, updateComment, deleteComment}