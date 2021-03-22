const describirse = (auto) => {
    return `Hola soy el auto marca ${auto.marca}, modelo ${auto.modelo}, fabricado en el año ${auto.anio} y de color ${auto.color}`;
}

let autos = {
    lista: [
            {
                marca: "volkswagen",
                modelo: "scirocco",
                anio: 2016,
                color: "black",
                describirse: describirse
            },
            {
                marca: "volkswagen",
                modelo: "scirocco",
                anio: 2020,
                color: "red",
                describirse: describirse
            },
            {
                marca: "volkswagen",
                modelo: "scirocco",
                anio: 2015,
                color: "white",
                describirse: describirse
            },
            {
                marca: "volkswagen",
                modelo: "golf",
                anio: 2016,
                color: "white",
                describirse: describirse
            },
            {
                marca: "volkswagen",
                modelo: "golf",
                anio: 2019,
                color: "black",
                describirse: describirse
            },
            {
                marca: "volkswagen",
                modelo: "vento",
                anio: 2019,
                color: "black",
                describirse: describirse
            },
            {
                marca: "volkswagen",
                modelo: "vento",
                anio: 2014,
                color: "blue",
                describirse: describirse
            },
            {
                marca: "volkswagen",
                modelo: "amarok",
                anio: 2020,
                color: "black",
                describirse: describirse
            },
            {
                marca: "volkswagen",
                modelo: "amarok",
                anio: 2019,
                color: "white",
                describirse: describirse
            },
            {
                marca: "volkswagen",
                modelo: "amarok",
                anio: 2010,
                color: "gray",
                describirse: describirse
            },
            {
                marca: "audi",
                modelo: "tt",
                anio: 2019,
                color: "white",
                describirse: describirse
            },
            {
                marca: "audi",
                modelo: "tt",
                anio: 2012,
                color: "black",
                describirse: describirse
            },
            {
                marca: "audi",
                modelo: "a6",
                anio: 2020,
                color: "black",
                describirse: describirse
            },
            {
                marca: "audi",
                modelo: "a6",
                anio: 2016,
                color: "red",
                describirse: describirse
            },
            {
                marca: "audi",
                modelo: "a3",
                anio: 2016,
                color: "black",
                describirse: describirse
            },
            {
                marca: "audi",
                modelo: "a3",
                anio: 2020,
                color: "black",
                describirse: describirse
            },
            {
                marca: "chevrolet",
                modelo: "camaro",
                anio: 2015,
                color: "red",
                describirse: describirse
            },
            {
                marca: "chevrolet",
                modelo: "camaro",
                anio: 20120,
                color: "black",
                describirse: describirse
            },
            {
                marca: "chevrolet",
                modelo: "camaro",
                anio: 2018,
                color: "white",
                describirse: describirse
            },

          ],

    porColor: function (color) {
        let respuesta = []
        for (let i = 0; i < autos.lista.length; i++) {
            if (autos.lista[i].color == color.toLowerCase()) {
                respuesta.push(autos.lista[i])
            }
        }
        if (respuesta.length == 0){
            respuesta = `Por el momento no tenenmos autos de color ${color}.`
        }
        return respuesta
    },
    
    porMarca: function (marca) {
        let respuesta = []
        for (let i = 0; i < autos.lista.length; i++) {
            if (autos.lista[i].marca == marca.toLowerCase()) {
                respuesta.push(autos.lista[i])
            }
        }
        if (respuesta.length == 0){
            respuesta = `Por el momento no tenenmos autos de la marca ${marca}.`
        }
        return respuesta
        
    },
    
    porAnio: function (anio) {
        let respuesta = []
        for (let i = 0; i < autos.lista.length; i++) {
            if (autos.lista[i].anio == anio) {
                respuesta.push(autos.lista[i])
            }
        }
        if (respuesta.length == 0){
            respuesta = `Por el momento no tenenmos autos del año ${anio}.`
        }
        return respuesta        
    }
}

module.exports = autos;