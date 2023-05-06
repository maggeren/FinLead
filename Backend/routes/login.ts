import express from "express";
//import getUser from "../controllers/loginController";
const loginRouter = express.Router();
import { loginController } from "../controllers/authentication/loginController";

loginRouter.post("/api/login", async (req, res) => {
  await loginController.loginUser(req, res);
});

export default loginRouter;
