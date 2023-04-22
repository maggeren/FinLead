var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Ticker from "../../models/Ticker.js";
function getStockDataFromDB(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //get all the tickers from the database
        console.log("called getstockdatafromdb");
        const tickers = yield Ticker.find();
        const tickerArray = tickers.map((ticker) => {
            return {
                ticker: ticker.ticker,
                companyName: ticker.companyName,
                sector: ticker.sector,
            };
        });
        res.status(200).json(tickerArray);
    });
}
export const searchBarController = { getStockDataFromDB };
