import express from "express";
import "dotenv/config";
import { routes } from "./routes/exports.js";
import connectDB from "./config/db.js";
const PORT = process.env.PORT;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});
//_________ROUTES_________
app.all("/api/register", routes.registerRouter);
app.all("/api/login", routes.loginRouter);
//________________________
const server = app.listen(PORT, () =>
  console.log(`💻 Server  started on http://localhost:${PORT} 💻`)
);
