const db = require('../database/models');

// Necesario para encriptar y desencriptar las contraseñas
const bcrypt = require('bcryptjs');

module.exports = {
    index: (req, res) => {
        // Validar si la sesion tiene un usuario cargado (si el usuario hizo login)
        if (req.session.usuario){
            res.render('index', {usuario: req.session.usuario});
        } else {
            res.render('index', {usuario: "anonimo"});
        }
    },

    registerForm: (req, res) => {
        res.render('register');
    },

    registerCreateUser: (req, res) => {
        // Encriptamos la contraseña antes de mandar a la base de datos
        let passEncriptada = bcrypt.hashSync(req.body.pass);
        
        db.Usuario.create({
            name: req.body.name,
            pass: passEncriptada
        }).then(usuario => {
            res.redirect('/');
        });

    },

    loginForm: (req, res) => {
        res.render('login');
    },

    loginValidate: (req, res) => {
        // Filtramos el usuario a traves de un campo que sea UNICO en la base de datos
        const filtro = {
            where: {
                name: req.body.name
            }
        }

        // Buscamos el usuario que deberia ser unico
        db.Usuario.findOne(filtro).then(usuario => {
            // Comparamos la contraseña ingresada en el login (req.body.pass)
            // con la que ingresada en el registro (usuario.pass)
            if(bcrypt.compareSync(req.body.pass, usuario.pass)){
                req.session.usuario = usuario.name;

                // En caso de que haya seleccionado recodarme, guardamos una cookie
                if(req.body.remember){
                    res.cookie('userId', usuario.id, { maxAge: 1000 * 60 * 5 });
                }
            }
            res.redirect('/');
        });
    },

    logout: (req, res) => {
        // Borramos la sesion del servidor
        req.session.destroy();
        // Eliminamos la cookie del cliente
        res.clearCookie('userId');
        res.redirect('/');
    }

}
