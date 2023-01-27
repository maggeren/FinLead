// require('node-jsx').install();
 var express = require("express");
var app = express();
const cors = require("cors");
var port = 5000;
// var renderer = require("react-engine");
// var engine = renderer.server.create();
app.use(cors())
app.use(express.json());
// app.engine('.jsx', engine);
app.set('views', __dirname + '/public/views');
// app.set('view engine', 'jsx');
// app.set("view", renderer.expressView);
app.use(express.static(__dirname + "/public"));

app.get("/message", function (req, res) {
    res.json({message:"Hello from server!" });
});
app.listen(port, function () {
    console.log("Server started on port ".concat(port));
});
