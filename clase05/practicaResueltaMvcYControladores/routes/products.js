const express = require('express');
const router = express.Router();
const autos = require('../autos/autos');
const controller = require('../controllers/productsController');

router.get('/', controller.index);

router.get('/marca/:marca', controller.marca);

router.get('/color/:color', controller.color)

// router.get('/modelo/:modelo', (req, res) => {
//     res.send(autos.porModelo(req.params.modelo));
// })

router.get('/modelo/:modelo/:anio?', controller.modelo);

router.get('/anio/:anio', controller.anio);

module.exports = router;