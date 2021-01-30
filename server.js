// Require Modules
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const PORT = 3000;

// load the env vars
require('dotenv').config();

// create express app
const app = express();

// connect to database

// require routes

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// view engine set up
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// add session middlware
app.use(session({
    secret: 'coffee_shops_lakeview',
    resave: false,
    saveUninitialized: true
  }));

// add passport middleware
app.use(passport.initialize());
app.use(passport.session());

// use routes

// set port
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT} \nhttp://localhost:${PORT}`);
  });