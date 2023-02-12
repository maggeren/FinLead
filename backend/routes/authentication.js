const express = require("express");
const router = express.Router();
import { comparePassword } from "../tools/bcrypt.js";

app.post("/login", (req, res) => {
  const email = req.body.email;
  // MISSING CODE FOR DATABASE QUERY
  const isUser = comparePassword(plain, hashed);
  isUser ? res.send(200) : res.send(401);
});

app.post("/signup", async (req, res) => {
  const mail = req.body.mail;
  const password = req.body.password;
  const exists = await User.exists({ mail: mail });

  if (exists) {
    res.redirect("/");
    return;
  }
});
