var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();

// Load configurations from .env file
require('dotenv').config();

const port = process.env.SERVER_PORT || 3000;

// Mongoose configs
mongoose.connect(process.env.MONGO_URL);
mongoose.set('debug', true);

// Express configs
app.use(express.json());
app.use(require('morgan')('dev'));

// Load passport configs
require('./config/passport');
app.use(passport.initialize());

// Set up routes
userRouter = require('./routes/users');
chartRouter = require('./routes/charts');
app.use(userRouter);
app.use(chartRouter);

// Start the server
app.listen(port, () => console.log(`Server starting on port ${port}`))