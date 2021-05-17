const db = require('../database/models');
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

module.exports = {
    index: (req, res) => {
        res.render('index', {usuario: req.session.usuario});
    },

    login: (req, res) => {
        res.render('login', { });
    },

    loginValidate: (req, res) => {
        const filtro = {
            where: {
                name: req.body.name
            }
        }

        db.Usuario.findOne(filtro).then(resultado => {
            if(bcrypt.compareSync(req.body.pass, resultado.pass)){
                req.session.usuario = resultado.name;

                if(req.body.remember){
                    res.cookie('userId', resultado.id, { maxAge: 1000 * 60 * 5 });
                }
            }
            res.redirect('/');
        });
    },

    registerForm: (req, res) => {
        res.render('register', { });
    },

    registerCreateUser: (req, res) => {
        let passEncriptada = bcrypt.hashSync(req.body.pass);
        db.Usuario.create({
            name: req.body.name,
            pass: passEncriptada
        }).then(usuario => {
            res.redirect('/');
        });
    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userId');
        res.redirect('/');
    }
}
