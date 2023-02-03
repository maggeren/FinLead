const path = require("../node_modules/path");
require('dotenv').config({path: "../.env"});
//console.log(process.env.CONNECTION);
var express = require("../node_modules/express");
var workoutRoutes = require('./routes/workout');
const mongoose = require("../node_modules/mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt");
const app = express();
const port = 5000;
//Using statements
app.use('/api/workouts/', workoutRoutes);
app.use(bodyParser.urlencoded({extended: true}));
// app.use(passport.initialize());
// app.use(passport.session());

mongoose.connect(`mongodb+srv://tobi2202:finLead2025@finleadcluster.3djmplw.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})

const testSchema = new mongoose.Schema({
    name: String
})

const Test = mongoose.model("Test", testSchema);

const userSchema = new mongoose.Schema({
    mail:String,
    password: String
})

const User = mongoose.model("User", userSchema);

//  const initialUser = new User({mail:"toby@mail.dk", password: "jones"})
//  initialUser.save();

// const testUser = new Test({name: "Kagebamsen2042"})
// testUser.save();


app.listen(port, function () {
    console.log("Server started on port ".concat("" + port));
});

app.post("/login", (req, res)=>{
  const username = req.body.username;
  const password = req.body.passsord;
  User.findOne({password: password}, (err, user)=>{
    if(err) console.log(err);
    else{
        console.log(user);
        console.log(user.mail);
        if(user.mail === username){
            console.log("Sucessfully logged in! Now redirecting")
            res.redirect("/");
        }
    }
  })
  
})