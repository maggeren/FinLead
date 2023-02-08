require("dotenv").config({ path: "../.env" });

//DATABASE
const mongoose = require("../node_modules/mongoose");

//EXPRESS
const express = require("../node_modules/express");
const app = express();
const session = require("express-session");

//AUTHENTICATION
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const bodyParser = require("body-parser");
const port = 4000;

//Using statements
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    proxy: true,
    secret: "DMU20XY",
    resave: false,
    saveUnitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12, //12hours
    },
    cookie: { secure: false }, // Remember to set this
  })
);
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(
  `mongodb+srv://tobi2202:finLead2025@finleadcluster.3djmplw.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const testSchema = new mongoose.Schema({
  name: String,
});

const Test = mongoose.model("Test", testSchema);

const userSchema = new mongoose.Schema({
  mail: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// passport.use(
//   new localStrategy(function (mail, password, done) {
//     User.findOne({ mail: mail }, function (err, user) {
//       if (err) return done(err);
//       if (!user) return done(null, false, { message: "Incorrect username" });
//       bcrypt.compare(password, user.password, function (err, res) {
//         if (err) return done(err);
//         if (res === false) {
//           return done(null, false, { message: "Incorrect password" });
//         }

//         return done(null, user);
//       });
//     });
//   })
// );

passport.use(
  new localStrategy((mail, password, done) => {
    User.findOne({ mail: mail }, (err, user) => {
      if (err || !user) {
        return !user
          ? done(err, false, { message: "Incorrect username or password" })
          : done(err);
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (err) return done(err);
        if (!res) return done(null, false, { message: "Incorrect password" });
        return done(null, user);
      });
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

//Routes

app.listen(port, function () {
  console.log("Server started on port ".concat("" + port));
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login?error=true",
  })
);

app.post("/register", async (req, res) => {
  const mail = req.body.mail;
  const password = req.body.password;

  const exists = await User.exists({ mail: mail });

  if (exists) {
    res.redirect("/");
    return;
  }

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) return next(err);

      const newUser = new User({
        mail: mail,
        password: hash,
      });
      console.log("New User added");

      newUser.save();
      res.redirect("/");
    });
  });
});
