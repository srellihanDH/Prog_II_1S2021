const db = require('../database/models');

module.exports = {
    index: (req, res) => {
        res.render('index', {error: null});
    },

    raza: (req, res) => {
        const filtro = {
            include: [
                {association: 'perros', include: 'color'}
            ]
        }

        db.Raza.findByPk(req.query.id, filtro).then(raza => {
            if (raza){
                //console.log(raza.toJSON());
                console.log(JSON.stringify(raza, null, 10));

                res.render('raza', {raza: raza});
            } else {
                console.log("No existe la raza " + req.query.id);

                res.render('index', {error: "No existe la raza " + req.query.id});
            }
        }).catch((error) => {
            console.log("Error de conexion: " + error.message);

            res.render('index', {error: "Error de conexion: " + error.message});
        });
    },

    crear: (req, res) => {
        let raza = req.body.raza;

        if(raza.includes('feo')){
            console.log('El nombre de la raza no puede contener la palabra feo');
            res.render('index', {error: 'El nombre de la raza no puede contener la palabra feo'});
        } else {
            db.Raza.create({
                raza: raza
            }).then(razaCreada => {
                res.redirect('/raza?id=' + razaCreada.id);
            });
        }
    }
}
