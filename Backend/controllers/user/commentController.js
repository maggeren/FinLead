var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Comment from "../../models/Comment.js";
const saveComment = (data) => __awaiter(void 0, void 0, void 0, function* () {
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
    yield comment.save();
    console.log("Saved new comment to the database");
    // res.status(200).json("New user added")
});
const getCommentsByTicker = (ticker) => __awaiter(void 0, void 0, void 0, function* () {
    const commments = yield Comment.find({ tickerReference: ticker });
    return commments;
});
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ticker = req.params.ticker;
    const comments = yield Comment.find({ tickerReference: ticker });
    // console.log(comments);
    res.status(200).json(comments);
});
const getReplies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Så henter vi svar!");
    const parent = yield Comment.findById({ _id: req.params.parent });
    console.log(parent);
    const replies = yield Comment.find({ parent: parent });
    //  console.log(replies);
    res.status(200).json(replies);
});
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Så kører vi!");
    const { id, content } = req.body;
    console.log(id, "will be passed");
    console.log(content);
    try {
        const comment = yield Comment.findById(id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        comment.content = content;
        yield comment.save();
        res.status(200).json("Comment updated with new content!");
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating comment" });
    }
});
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Nu kører vi ");
    const comment = req.body.id;
    console.log(comment);
    Comment.findByIdAndDelete(comment, (err, document) => {
        if (!err) {
            console.log("Comment just got deleted!");
        }
    });
    res.status(200).json("Her er din kommentar");
});
export const commentController = { saveComment, getComments, getCommentsByTicker, updateComment, deleteComment, getReplies };
