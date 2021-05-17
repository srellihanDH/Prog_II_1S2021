var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');
app.use(session( {
  secret: "una vaca loca",
	resave: false,
	saveUninitialized: false
}));

const db = require('./database/models');
app.use(function(req, res, next) {
  if(req.cookies.userId && !req.session.usuario) {
    db.Usuario.findByPk(req.cookies.userId).then(resultado => {
      req.session.usuario = resultado.name;
      return next();
    });
  } else {
  	return next();
  }}
);

app.use(function(req, res, next) {
  if(req.session.usuario){
    res.locals = {
      logueado: true
    }
  } else {
    res.locals = {
      logueado: false
    }
  }
	return next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
