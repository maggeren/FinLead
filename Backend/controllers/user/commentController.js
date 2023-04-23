var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Comment from "../../models/Comment";
const saveComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Going to save comment");
    const content = req.body.content;
    const tickerRef = req.params["ticker"];
    const comment = new Comment({
        content: content,
        createdAt: new Date().toLocaleDateString("en-GB"),
        tickerReference: tickerRef,
        userReference: "Test kaj"
    });
    comment.save();
    res.status(200).json("New user added");
});
export const commentController = { saveComment };
