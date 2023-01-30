const path = require("../node_modules/path");
require('dotenv').config({path: "../.env"});
//console.log(process.env.CONNECTION);
var express = require("../node_modules/express");
var workoutRoutes = require('./routes/workout');
const mongoose = require("../node_modules/mongoose");
var app = express();
var port = 5000;
app.use('/api/workouts/', workoutRoutes);


mongoose.connect(`${process.env.CONNECTION}`, {useNewUrlParser: true, useUnifiedTopology: true})

const testSchema = new mongoose.Schema({
    name: String
})

const Test = mongoose.model("Test", testSchema);

const testUser = new Test({name: "Kagebamsen2042"})
testUser.save();


app.listen(port, function () {
    console.log("Server started on port ".concat("" + port));
});