import express from "express";
import session from "express-session";
import cors from "cors";
import "dotenv/config";
//import redis from "redis";
import { routes } from "./routes/exports.js";
import connectDB from "./config/db.js";
import http from "http";
import { Server } from "socket.io";
//const redisClient = redis.createClient();
//redisClient.connect();
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
// Handle WebSocket connections
io.on("connection", (socket) => {
    console.log("WebSocket connection established");
    // Handle incoming messages
    socket.on("message", (message) => {
        console.log(`Received message: ${message}`);
        // Send a response back to the client
        socket.send("This is a response from the server!");
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    // Send a message to the client on connection
    socket.send("Welcome to the WebSocket server!");
});
// Start the server
server.listen(PORT, () => console.log(`💻 Server started on http://localhost:${PORT} 💻`));
//________________________
// app.listen(PORT, () =>
//   console.log(`💻 Server  started on http://localhost:${PORT} 💻`)
// );
//export default redisClient;
