const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(session({
  secret:"someSecret",
  resave: true,
  saveUninitialized: true
}));

let port = process.env.PORT || 6666;
app.listen(port,(err) => {
  console.log("Listening on port " + port);
});

module.exports = app;
