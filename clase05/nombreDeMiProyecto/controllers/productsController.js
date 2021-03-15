const autos = require('../autos/index');

const controlador = {
    index: (req, res, next) => {
        res.send(autos.lista);
    },
    color: (req, res, next) => {
        let color = req.params.color;
        res.send(autos.porColor(color));
    }
}

module.exports = controlador;
