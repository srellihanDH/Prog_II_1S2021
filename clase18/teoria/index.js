var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  res.cookie('universidad', 'udesa', {maxAge: 1000*60*5});
  //res.cookie('color', 'rojo', {maxAge: 1000*60*5});

  if(req.session.titulo){
    res.render('index', { title: req.session.titulo, color: req.cookies.color });
  } else {
    req.session.titulo = "Sesion iniciada";
    res.render('index', { title: "No habia nada", color: "ninguno" });
  }

});

module.exports = router;
