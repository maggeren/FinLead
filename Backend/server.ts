import express from "express";
import session from "express-session";
import cors from "cors";
import "dotenv/config";
//import redis from "redis";
import { routes } from "./routes/exports.js";
import connectDB from "./config/db.js";
//const redisClient = redis.createClient();
//redisClient.connect();
const PORT = process.env.PORT;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use(cors(corsOptions));
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 360000, // expires in 1 hour
      sameSite: true,
      secure: true, // set to true if using HTTPS
    },
  })
);

//_________ROUTES_________
app.all("/api/register", routes.registerRouter);
app.all("/api/login", routes.loginRouter);
app.all("/api/logout", routes.loginRouter);
app.all("/api/checkLogin", routes.loginRouter);
app.all("/api/comment", routes.authenticateRouter);
app.all("/api/searchbar", routes.searchBarRouter);

//For comments
app.all("/api/postComment/:ticker", routes.commentRouter);
app.all("/api/comments/:ticker", routes.commentRouter);
app.all("/api/replies/:parent", routes.commentRouter);
app.all("/api/updateComment/:id", routes.commentRouter);
app.all("/api/deleteComment/:id", routes.commentRouter);

//________________________
const server = app.listen(PORT, () =>
  console.log(`💻 Server  started on http://localhost:${PORT} 💻`)
);

//export default redisClient;
