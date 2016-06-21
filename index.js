var express = require("express");
var app = express();

var port = process.env.PORT||5000;

app.get("/", function (request, response) {
    response.send("Time start");
});

app.listen(port, function () {
    console.log("App listening on port " + port);
});


