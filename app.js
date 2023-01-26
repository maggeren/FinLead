require('node-jsx').install();
var express = require("express");
var app = express();
var port = 3000;
var renderer = require("react-engine");
var engine = renderer.server.create();
// 
app.engine('.jsx', engine);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jsx');
app.set("view", renderer.expressView);
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
    res.render("page");
});
app.listen(port, function () {
    console.log("Server started on port ".concat(port));
});
