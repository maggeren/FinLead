import express from "express";
//import getUser from "../controllers/loginController";
const loginRouter = express.Router();
import loginUser from "../controllers/loginController.js";
loginRouter.post("/api/login", async (req, res) => {
  console.log("login route");
  const user = loginUser(req, res);
  return user ? res.send(200) : res.send(401);
});

export default loginRouter;
