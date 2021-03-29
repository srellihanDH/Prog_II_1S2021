const seba = {
    index: (req,res) => {
        let nombre = "Eze";
        let respuesta = {
            nombre: nombre,
            apellido: "lago",
            edad: 32,
            casa: {
                direccion: "larrea",
                numero: 1542,
                mostrar: () => "Soy la casa mas linda en " + respuesta.casa.direccion
            },
        };

        res.render('mivista', respuesta);
    },

    cualquiera: (req,res) => {
        let id;
        if(req.params.duki){
            id = req.params.duki;
        } else {
            console.log("No vino el parametro")
            id = 0;
        }
        
        console.log(id);
        
        let respuesta = {};
        res.render('otravista', respuesta);
    }
}

module.exports = seba;
