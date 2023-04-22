import express from "express";
import cors from "cors";
import "dotenv/config";
import { routes } from "./routes/exports.js";
import connectDB from "./config/db.js";
import readFromJson from "./controllers/stock/writeTickersToDB.js";
const PORT = process.env.PORT;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

//_________ROUTES_________
app.all("/api/register", routes.registerRouter);
app.all("/api/login", routes.loginRouter);
app.all("/api/searchbar", routes.searchBarRouter);

//________________________
const server = app.listen(PORT, () =>
  console.log(`💻 Server  started on http://localhost:${PORT} 💻`)
);
