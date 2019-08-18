global._config = require('./app/config');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let indexRoute = require('./app/routes/v1/index');
const ErrorHandler = require('./app/handlers/error');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1', indexRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  ErrorHandler.sendResponse(res,ErrorHandler.message.NOT_FOUND);
});

// error handler
app.use(function (err, req, res, next) {

  ErrorHandler.sendResponse(res,ErrorHandler.message.INTERNAL_SERVER_ERROR);
});

module.exports = app;
