import express from "express";
import { searchBarController } from "../../controllers/stock/searchBarController.js";
const searchBarRouter = express.Router();
searchBarRouter.get("/api/searchbar", searchBarController.getStockDataFromDB);
export default searchBarRouter;
