import express from "express";
import { registerController } from "../../controllers/authentication/registerController.js";
const registerRouter = express.Router();
registerRouter.post("/api/register", registerController.registerUser);
export default registerRouter;
