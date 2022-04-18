const config = require("./config")

const express = require('express');
const app = express();

const fs = require("fs");
const path = require("path");

console.clear();
console.log("Starting Express Server");

if (!fs.existsSync("cdn")){
    fs.mkdirSync("cdn");
}

app.listen(config.PORT, () => {
    console.log(`Served Listening Requests:\n- \x1b[34m http://localhost:${config.PORT} \x1b[0m`);
    app.use(express.static(path.join(__dirname, "cdn")));

    // 404
    app.get('*', function(req, res){ 
        res.sendFile(path.join(__dirname, "web", "notfound.html"));
    });
});