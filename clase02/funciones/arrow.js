function imprimirMensaje (mensaje, numero) {
    console.log("Mi mensaje es: " + mensaje);
    return numero*2;
}

let saludar = (nombre, edad) => console.log("Hola, soy " + nombre + ", tengo " + edad + " años :)");

let soloImprimirMensaje1 = () => {console.log("hey")};

let soloImprimirMensaje2 = (a) => a*2;
let soloImprimirMensaje3 = (a) => (a*2);
let soloImprimirMensaje4 = (a) => {
    console.log("Voy a duplicar " + a);
    return (a*2)
};

let soloImprimirMensaje5 = (a,b) => a*b;

let eze = {
    nombre: "Eze",
    edad: 32,
    saludar: () => saludar(eze.nombre, eze.edad)
}

let seba = {
    nombre: "Seba",
    edad: 20,
    saludar: () => saludar(seba.nombre, seba.edad)
}

//console.log(persona);

eze.saludar();
seba.saludar();

/*let hola = "Hola";
let chau = "Chau";
let numerito = 10;

imprimirMensaje(hola);
let numero = imprimirMensaje(chau, numerito);
console.log(numero);
*/
