var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Ticker from "../../models/Ticker";
import fs from "fs";
// Read the CSV file
const readFromJson = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = fs.readFileSync("/Users/magnusgeertjensen/Desktop/FinLead/frontend/public/tickers.json", "utf8");
        const tickerArray = JSON.parse(data);
        tickerArray.forEach((ticker) => {
            Ticker.create({
                ticker: ticker.Ticker,
                companyName: ticker.CompanyName,
                sector: ticker.Sector,
            });
        });
        console.log("created successfully");
    }
    catch (err) {
        console.log(err);
    }
});
export default readFromJson;
