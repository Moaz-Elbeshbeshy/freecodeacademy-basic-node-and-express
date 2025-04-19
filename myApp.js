let express = require("express");
let app = express();
require("dotenv").config();

app.get("/json", (req, res) => {
    const message =
        process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
    res.json(message);
});

module.exports = app;
