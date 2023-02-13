import express from "express";
import "dotenv/config";
import registerRouter from "./routes/register.js";
import loginRouter from "./routes/register.js";
import connectDB from "./config/db.js";
const PORT = 6000 || process.env.PORT;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//_________ROUTES_________
app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
//________________________

const server = app.listen(PORT, () =>
  console.log(`Server started on PORT ${PORT}`)
);

server.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  // Close the server instance
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    // some other closing procedures go here
    process.exit(0);
  });
});
