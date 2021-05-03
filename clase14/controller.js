let db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    listar: (req, res) => {
        let filtro = {
            where: {
                title: {[Op.like]:'%A%'}
            },
            order: [
                ['title', 'ASC'],
              ],
              limit: 5
               
        }

        db.Pelicula.findAll(filtro).then(resultado => {
            res.render('index', {lista: resultado});
        });

    }
}
