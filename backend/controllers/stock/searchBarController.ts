import mongoose from "mongoose";
//import redisClient from "../../server.js";
import Ticker from "../../models/Ticker.js";
async function getStockDataFromDB(req: any, res: any) {
  //const ticker = await redisClient.get("tickers");
  //if (ticker) {
    //res.status(200).json(JSON.parse(ticker)); //send the tickers to the frontend
  //} else {
    const tickers = await Ticker.find();
    const tickerArray = tickers.map((ticker: any) => {
      return {
        ticker: ticker.ticker,
        companyName: ticker.companyName,
        sector: ticker.sector,
      };
    });
    //await redisClient.set("tickers", JSON.stringify(tickerArray), {
      //EX: 21600, // let key expire after 6 hours
    //});
    res.status(200).json(tickerArray);
  //}
}
export const searchBarController = { getStockDataFromDB };
