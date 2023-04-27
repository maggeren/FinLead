import express from "express";
import { commentController } from "../../controllers/user/commentController.js";
const commentRouter = express.Router();
commentRouter.post("/api/postComment/:ticker", commentController.saveComment);
commentRouter.get("/api/comments/:ticker", commentController.getComments);
export default commentRouter;
