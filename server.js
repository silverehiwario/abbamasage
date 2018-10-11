var bodyParser = require('body-parser');
var express = require("express");
var methodOveride = require('method-override');
const nodemailer = require("nodemailer");



var app = express();
//app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));

// override with POST having ?_method=DELETE
app.use(methodOveride('_method'))



require("./app/route/html-route.js")(app);
require("./app/route/api-route.js")(app);

app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});
