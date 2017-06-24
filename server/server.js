import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import { join, resolve } from 'path';

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

app.use(express.static(join(`${__dirname}/../build`)));
app.use(express.static(join(`${__dirname}/../public`)));

app.get('/*', (request, response) => {
  response.sendFile(resolve(`${__dirname}/../public/index.html`));
});

let port = process.env.PORT || 3000;
app.listen(port,(err) => {
  console.log("Listening on port " + port);
});
