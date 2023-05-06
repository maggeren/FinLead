var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//import redisClient from "../../server.js";
import Ticker from "../../models/Ticker.js";
function getStockDataFromDB(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //const ticker = await redisClient.get("tickers");
        //if (ticker) {
        //res.status(200).json(JSON.parse(ticker)); //send the tickers to the frontend
        //} else {
        const tickers = yield Ticker.find();
        const tickerArray = tickers.map((ticker) => {
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
    });
}
export const searchBarController = { getStockDataFromDB };
