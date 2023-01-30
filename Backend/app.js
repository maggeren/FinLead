var express = require("express");
var workoutRoutes = require('./routes/workout');
var app = express();
var port = 5000;
app.use('/api/workouts/', workoutRoutes);
app.listen(port, function () {
    console.log("Server started on port ".concat("" + port));
});
