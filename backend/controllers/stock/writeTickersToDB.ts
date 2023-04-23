import Ticker from "/Users/magnusgeertjensen/Desktop/FinLead/backend/models/Ticker.js";
import fs from "fs";

// Read the CSV file

const readFromJson = async (): Promise<any> => {
  try {
    const data = fs.readFileSync(
      "/Users/magnusgeertjensen/Desktop/FinLead/frontend/public/tickers.json",
      "utf8"
    );
    const tickerArray = JSON.parse(data);
    tickerArray.forEach((ticker: any) => {
      Ticker.create({
        ticker: ticker.Ticker,
        companyName: ticker.CompanyName,
        sector: ticker.Sector,
      });
    });
    console.log("created successfully");
  } catch (err) {
    console.log(err);
  }
};
export default readFromJson;
