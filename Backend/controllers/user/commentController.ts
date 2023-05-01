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
    const {content} = req.body;
    console.log(content);
    Comment.updateOne({content: content}, {$set: {content: content}})
    res.status(200).json("Comment updated with new content!")
    
}

export const commentController = {saveComment, getComments, updateComment}