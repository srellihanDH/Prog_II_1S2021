function imprimirMensaje (mensaje, numero) {
    console.log("Mi mensaje es: " + mensaje);
    return numero*2;
}

let hola = "Hola";
let chau = "Chau";
let numerito = 10;

imprimirMensaje(hola);
let numero = imprimirMensaje(chau, numerito);
console.log(numero);
