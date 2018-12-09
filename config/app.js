var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app = require('../config/path')(app);
app = require('../config/error')(app);
app = require('../config/port')(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
