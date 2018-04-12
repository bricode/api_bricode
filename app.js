var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.route');
var projectsRouter = require('./routes/projects.route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-API-KEY,Origin,X-Requested-With,Content-Type, Accept, Access-Control-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
  res.header('Allow', 'GET,POST,OPTIONS,PUT,DELETE');
  next();
})


app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/api', projectsRouter);

module.exports = app;
