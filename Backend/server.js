import express from "express";
import "dotenv/config";
import registerRouter from "./routes/register";
import loginRouter from "./routes/login";
import connectDB from "./config/db";
const PORT = 6000 || process.env.PORT;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//_________ROUTES_________
app.all("/api/register", registerRouter);
app.all("/api/login", loginRouter);
//________________________
const server = app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
