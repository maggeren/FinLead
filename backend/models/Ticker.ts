import mongoose from "mongoose";

const tickerSchema = new mongoose.Schema({
  ticker: {
    type: String,
    required: [true, "Please add ticker code"],
    unique: true,
  },
  companyName: {
    type: String,
    required: [true, "Please add company name"],
  },
  sector: {
    type: String,
  },
});
const Ticker = mongoose.model("Ticker", tickerSchema);

export default Ticker;
