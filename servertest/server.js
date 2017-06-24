<<<<<<< HEAD
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
=======
import express from 'express';
import { resolve, join } from 'path';
import dotenv from 'dotenv';
import passport from 'passport';
import middleware from './config/middleware';
import routes from './config/routes';
import auth from './config/passport';
import connection from './db/index';

dotenv.config();
const app = express();

middleware(app, passport);
routes(app, passport);
auth(passport, connection);

app.use(express.static(join(`${__dirname}/../build`)));
app.use(express.static(join(`${__dirname}/../public`)));

app.get('/*', (request, response) => {
  response.sendFile(resolve(`${__dirname}/../public`, 'index.html'));
});

const server = app.listen(3456, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
>>>>>>> trial server
