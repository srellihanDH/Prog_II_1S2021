var express = require('express');
var router = express.Router();

let productsController = require('../controllers/productsController');

router.get('/', productsController.index);

router.get('/color/:color', productsController.color);

module.exports = router;
