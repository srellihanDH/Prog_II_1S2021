var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Habilitamos a express a usar sesiones (req.session.abc)

const session = require('express-session');

app.use(session( {
  secret: "sistema de login",
	resave: false,
	saveUninitialized: false
}));

// Leer la cookie y loguear al usuario, si no esta logueado (no esta cargado en la sesion)

const db = require('./database/models');

app.use(function(req, res, next) {
  if(req.cookies.userId && !req.session.usuario) {
    db.Usuario.findByPk(req.cookies.userId).then(resultado => {
      req.session.usuario = resultado.name;
      req.session.id = resultado.id;
      return next();
    });
  } else {
  	return next();
  }}
);

// Cargamos variables en locals, para que puedan ser usadas en todas las vistas (por ej, logueado)

app.use(function(req, res, next) {
  if(req.session.usuario){
    res.locals = {
      logueado: true,
      usuario: req.session.usuario
    }
  } else {
    res.locals = {
      logueado: false,
      usuario: "anonimo"
    }
  }

	return next();
});

// Se cargan las rutas

app.use('/', indexRouter);

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
