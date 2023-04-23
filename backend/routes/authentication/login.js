import express from "express";
import { loginController } from "../../controllers/authentication/loginController.js";
const loginRouter = express.Router();
loginRouter.post("/api/login", loginController.loginUser);
export default loginRouter;
