const express = require("express");
require("dotenv").config();
const app = express();

app.get("/v1", (req, res) => {
    res.send("Hello World!");
});

app.get("/v1/test", (req, res) => {
    res.send("Hello test!");
});

app.listen(process.env.PORT, () => {
    console.log("Server started on port 3000" );
});


