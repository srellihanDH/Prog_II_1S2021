const autos = require('../autos/autos');

let controller = {
    index: (req, res) => {
        res.send(autos.lista)
    },
    marca: (req, res) => {
        res.send(autos.porMarca(req.params.marca));
    },
    color: (req, res) => {
        res.send(autos.porColor(req.params.color));
    },
    modelo: (req, res) => {
        let modelo = req.params.modelo;
        let anio = req.params.anio;
        let autosPorModelo = autos.porModelo(modelo);
    
        if (anio == undefined) {
            res.send(autosPorModelo);
        } else {
            let resultadoConAnio = []
    
            for (let i = 0; i < autosPorModelo.length; i++) {
                if (autosPorModelo[i].anio >= anio) {
                    resultadoConAnio.push(autosPorModelo[i]);
                }
            }
    
            if (resultadoConAnio.length == 0) {
                res.send(`Lo sentimos, pero no se han encontrado modelos ${modelo} posteriores al año ${anio}`);
            } else {
                res.send(resultadoConAnio);
            }
        }
    },
    anio: (req,res)=>{
        let anio = req.params.anio
        let autosPorAnio = autos.porAnio(anio);
    
        res.send(autosPorAnio);
    },
};

module.exports = controller;