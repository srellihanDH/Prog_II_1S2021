var express = require('express');
var router = express.Router();

const controlador = require('../controllers/controlador');

router.get('/', controlador.index);
router.get('/raza', controlador.raza);
router.post('/raza', controlador.crear);

module.exports = router;
