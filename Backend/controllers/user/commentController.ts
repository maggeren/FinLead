import Comment from "../../models/Comment";

const saveComment = async(req: any, res:any) => {
    console.log("Going to save comment");
    const content = req.body.content
    const tickerRef = req.params["ticker"];
    const comment = new Comment({
        content:content,
        createdAt: new Date().toLocaleDateString("en-GB"),
        tickerReference: tickerRef,
        userReference: "Test kaj"
    });
    comment.save();
    res.status(200).json("New user added")
};

export const commentController =  {saveComment}