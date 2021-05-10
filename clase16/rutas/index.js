var express = require('express');
var router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.index);
router.get('/detalle/:id', controller.detalle);
router.get('/buscar', controller.listar);
router.get('/modificar', controller.modificarForm);
router.post('/crear', controller.crear);
router.post('/borrar', controller.borrar);
router.post('/modificar', controller.modificarPost);

module.exports = router;
