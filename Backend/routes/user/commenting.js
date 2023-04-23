import express from "express";
import { commentController } from "../../controllers/user/commentController";
const commentRouter = express.Router();
commentRouter.post("/api/postComment", commentController.saveComment);
export default commentRouter;
