var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import session from "express-session";
import cors from "cors";
import "dotenv/config";
//import redis from "redis";
import { routes } from "./routes/exports.js";
import connectDB from "./config/db.js";
import http from "http";
import { Server } from "socket.io";
import { commentController } from "./controllers/user/commentController.js";
const PORT = process.env.PORT;
connectDB();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
};
//app.use(cors(corsOptions));
app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 360000,
        sameSite: true,
        secure: true, // set to true if using HTTPS
    },
}));
// Set CORS headers for all routes
app.use(cors(corsOptions));
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
// Handle WebSocket connections
//-----------------------------------------
io.on("connection", (socket) => {
    console.log("WebSocket connection established");
    // Handle incoming messages
    socket.on("comment", (data) => __awaiter(void 0, void 0, void 0, function* () {
        //Save comment to database
        try {
            yield commentController.saveComment(data); //saving the new comment
            const updatedComments = yield commentController.getCommentsByTicker(data.tickerRef);
            console.log(updatedComments);
            io.emit("serverResponse", updatedComments);
        }
        catch (error) {
            console.log(error);
            //socket.emit("serverResponse", "Could not save it bitch!");
        }
        // Send a response back to the client  
    }));
    socket.on("newCommentAdded", (data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Nu kommer der noget ind " + data.tickerRef);
        const updatedComments = yield commentController.getCommentsByTicker(data.tickerRef);
        console.log(updatedComments);
        socket.emit("serverResponse", updatedComments);
    }));
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on("updateLike", (data) => __awaiter(void 0, void 0, void 0, function* () {
        let comment;
        if (data.operation === "addLike") {
            comment = yield commentController.incrementLike(data.comment, data.user);
        }
        else {
            comment = yield commentController.removeLike(data.comment, data.user);
        }
        io.emit("likesUpdated", comment);
    }));
    // Send a message to the client on connection
    socket.send("Welcome to the WebSocket server!");
});
//---------------------------------------------
// Start the server
server.listen(PORT, () => console.log(`💻 Server started on http://localhost:${PORT} 💻`));
//________________________
// app.listen(PORT, () =>
//   console.log(`💻 Server  started on http://localhost:${PORT} 💻`)
// );
//export default redisClient;
