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
// Connect to DB with Mongoose
require('./config/database');

require('./config/passport');

// require routes

const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');
const shopsRoutes = require('./routes/shops');


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

app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/shops', shopsRoutes);

// set port
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT} \nhttp://localhost:${PORT}`);
  });