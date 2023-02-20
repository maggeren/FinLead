import express from "express";
import { resetController } from "../../controllers/authentication/resetController.js";
const resetRouter = express.Router();
resetRouter.post("/api/forgot-password", resetController.changePassword);

export default resetRouter;
