
require('node-jsx').install();
const express = require("express");
const app = express();
const port = 5000;
const renderer = require("react-engine")
const engine = renderer.server.create();




// 
app.engine('.jsx', engine);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jsx');
app.set("view", renderer.expressView)

app.use(express.static(__dirname + "/public"))

// app.get("/", (req: any, res: any)=>{
//     res.render("page")
// })

app.get("/api", (req:any, res:any)=>{
    res.json({"users:":["p", "n", "l"]})

})

app.listen(port, ()=>{
console.log(`Server started on port ${port}`)
})