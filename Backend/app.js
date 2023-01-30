require('dotenv').config();
var express = require("express");
var workoutRoutes = require('./routes/workout');
const mongoose = require("mongoose");
var app = express();
var port = 5000;
app.use('/api/workouts/', workoutRoutes);


mongoose.connect(`${process.env.CONNECTION}`, {useNewUrlParser: true, useUnifiedTopology: true})

const testSchema = new mongoose.Schema({
    name: String
})

const Test = mongoose.model("Test", testSchema);

const testUser = new Test({name: "Batman"})
testUser.save();


app.listen(port, function () {
    console.log("Server started on port ".concat("" + port));
});