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
const saveComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Going to save comment");
    const content = req.body.content;
    console.log(content);
    console.log("parametre er" + req.params);
    const tickerRef = req.params.ticker;
    console.log("tickerRef er " + tickerRef);
    // if (!req.headers.authorization) {
    //     return res.status(401).json({ message: "Missing Authorization header" });
    //   }
    // const token = req.headers.authorization.split(" ")[1]; // get the token from the Authorization header
    // const decodedToken = jwt.verify(token, "secretKey"); // decode the token using the secret key
    // console.log("afkoded token er " + decodedToken);
    // const userName = decodedToken.userName; // extract the user id from the token
    // console.log("Navn er " + userName);
    const comment = new Comment({
        content: content,
        createdAt: new Date().toLocaleDateString("en-GB"),
        tickerReference: tickerRef,
        userReference: "Test Kaj"
    });
    comment.save();
    res.status(200).json("New user added");
});
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ticker = req.params.ticker;
    const comments = yield Comment.find({ tickerReference: ticker });
    console.log(comments);
    res.status(200).json(comments);
});
export const commentController = { saveComment, getComments };
