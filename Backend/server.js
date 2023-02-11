const express = require("express");
const dotenv = reuire("dotenv").config();

const PORT = 5000 || process.env.PORT;
const app = express();
app.listen(port, () => console.log(`Server started on PORT ${PORT}`));
