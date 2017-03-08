var express = require("express");
var mongoose = require("mongoose");
var app = express();

// DB Setting
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;

db.once("open", function () {
  console.log("DB Connected!");
});

db.on("error", function (err) {
  console.log("DB ERROR : ", err);
});

// Other Setting
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Port Setting
app.listen(3000, function() {
  console.log("Server On!");
});
