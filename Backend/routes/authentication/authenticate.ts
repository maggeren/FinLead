import express from "express";
import { authenticateController } from "../../controllers/authentication/authenticateController.js";
const authenticateRouter = express.Router();

authenticateRouter.get("/api/comment", authenticateController.isLoggedIn, (req:any, res:any)=>{
    console.log("HELLO WORLD!");
    res.status(200).json("You can comment!");
})

export default authenticateRouter;