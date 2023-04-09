import express from "express";
import { loginController } from "../../controllers/authentication/loginController.js";
const loginRouter = express.Router();
//const logoutRouter = express.Router();
loginRouter.post("/api/login", loginController.loginUser);
loginRouter.post("/api/logout", loginController.logoutUser);
loginRouter.get("/api/checkLogin", loginController.checkIsLoggedIn)

export default loginRouter;
//export const logginrouters = {loginRouter,logoutRouter};
