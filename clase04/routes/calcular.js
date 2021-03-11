var express = require('express');
var router = express.Router();
var calculadora = require('./util/calculadora');

router.get('/sumar/:valor1/:valor2', function(req, res, next) {
  res.render('index2', { titulo: "El resultado es " 
    + calculadora.sumar(Number(req.params.valor1), 
    Number(req.params.valor2)) });
});

module.exports = router;
