import express from "express";
//import getUser from "../controllers/loginController";
const loginRouter = express.Router();
import { loginUser } from "../controllers/loginController.js";
loginRouter.post("/api/login", async (req, res) => {
  await loginUser(req, res);
});

export default loginRouter;
