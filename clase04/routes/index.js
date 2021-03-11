var express = require('express');
var router = express.Router();

let datos = { 
  titulo: 'Ezequiel' 
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', datos);
});

router.get('/seba/:algo', function(req, res, next) {
  res.render('index2', { titulo: 'Sebastian ' + req.params.algo });
});

module.exports = router;
