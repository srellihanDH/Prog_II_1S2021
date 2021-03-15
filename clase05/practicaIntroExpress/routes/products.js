const express = require('express');
const router = express.Router();
const autos = require('../autos/autos');

router.get('/', (req, res) => {
    res.send(autos.lista);
});

router.get('/marca/:marca', (req, res) => {
    let marca = req.params.marca;
    let porMarca = autos.porMarca(marca);
    res.send(porMarca);
});

module.exports = router;