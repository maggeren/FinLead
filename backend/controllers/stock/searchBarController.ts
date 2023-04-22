import mongoose from "mongoose";
import { Express } from "express";
import Ticker from "../../models/Ticker.js";
async function getStockDataFromDB(req: any, res: any) {
  //get all the tickers from the database
  console.log("called getstockdatafromdb");
  const tickers = await Ticker.find();
  const tickerArray = tickers.map((ticker: any) => {
    return {
      ticker: ticker.ticker,
      companyName: ticker.companyName,
      sector: ticker.sector,
    };
  });
  res.status(200).json(tickerArray);
}
export const searchBarController = { getStockDataFromDB };
