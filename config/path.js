var express = require('express');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

var appPath = function(app) {

  // view engine setup
  app.set('views', path.join(__dirname, '../app/views'));
  app.set('view engine', 'ejs');
  app.use(expressLayouts);

  app.use(express.static(path.join(__dirname, '../app/public')));

  app = require('../config/routes')(app);

  return app;
}
module.exports = appPath;
