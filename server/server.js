var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var workouts = require("./routes/workouts");

var app = express();

var port = 3001;

app.listen(port, function() {
    console.log("Server running on port", port);
});


//  Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//body-parser
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use("/", index);
app.use("/api", workouts);