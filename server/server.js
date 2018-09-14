var express = require("express");
var bodyparser = require("body-parser");

//rest object

var app = express();

//enable cors

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//set json as mime type

app.use(bodyparser.json());

//take permission to read post parameters

app.use(bodyparser.urlencoded({extended:false}));

//import login about contact portfolio logout module

var login = require('./login/login');
app.use('/login', login);

var about = require('./about/about');
app.use('/about', about);

var contact = require('./contact/contact');
app.use('/contact', contact);

var portfolio = require('./portfolio/portfolio');
app.use('/portfolio', portfolio);

var logout = require('./logout/logout');
app.use('/logout', logout);

//assign the port no.

app.listen(8082);
console.log("server listening to port no 8082");
