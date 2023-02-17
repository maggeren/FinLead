import express from "express";
import "dotenv/config";
import registerRouter from "./routes/register.js";
import loginRouter from "./routes/login.js";
import connectDB from "./config/db.js";
const PORT = 6000 || process.env.PORT;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//_________ROUTES_________
app.all("/api/register", registerRouter);
app.all("/api/login", loginRouter);
//________________________
const server = app.listen(PORT, () =>
  console.log(`Server started on PORT ${PORT}`)
);
