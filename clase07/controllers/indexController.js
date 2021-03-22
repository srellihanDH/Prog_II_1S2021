let controlador = {
    index: (req, res) => {
        let respuesta = { 
            titulo: 'UDESA',
            encabezado: 'Geniales',
            nombre: 'Seba'
        };

        res.render('index', respuesta);
    },
    algo: (req,res) => {
        res.render('algo');
    }
}

module.exports = controlador;
