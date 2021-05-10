const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    listar: (req, res) => {
        const filtro = {
            where: {
                title: {[Op.like]:'%' + req.query.filtro + '%'}
            }
        }

        db.Pelicula.findAll(filtro).then(resultado => {
            res.render('lista', {lista: resultado});
        });
    },
    
    detalle: (req, res) => {
        db.Pelicula.findByPk(req.params.id).then(resultado => {
            res.render('nueva', {peli: resultado});
        });
    },

    crear: (req, res) => {
        db.Pelicula.create({
            title: req.body.titulo
        }).then(peliCreada => {
            res.redirect('/detalle/' + peliCreada.id);
        });
    },

    borrar: (req, res) => {
        db.Pelicula.destroy({
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.redirect('/buscar?filtro=');
        });
    },

    modificarForm: (req, res) => {
        db.Pelicula.findByPk(req.query.id).then(resultadoPeli => {
            db.Genero.findAll().then(resultadoGeneros => {
                res.render('modificar', {peli: resultadoPeli, generos: resultadoGeneros});
            });
        });
    },

    modificarPost: (req, res) => {
        db.Pelicula.update({
            title: req.body.titulo,
            genreId: req.body.genero
        },{
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.redirect('/buscar?filtro=');
        });
    },

}
