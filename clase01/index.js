let nombre = "Sebastián";
const url = "https://playground.digitalhouse.com/";

nombre = "Ezequiel"; // Esto no dará error
// url = "https://www.digitalhouse.com/"; // Esto si dará error


// Alcance, o scope, de las variables
/* if (true) {
    nombre = "Gabriel"; 
    url = "https://www.instagram.com/";
    if (true) {
        let edad = 20;
    }
} */

console.log(nombre);
console.log(url);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let array = [1, 2, 3, 4];
let ultimoNumero = array.pop(); // Puedo almacenar el valor extraído del array, con el método pop(), en una variable

console.log(ultimoNumero);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let edad = 20;

// IF tradicional
if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

// IF ternario
edad >= 18 ? console.log("Mayor de edad") : console.log("Menor de edad");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numeros = [10, 20, 30, 40];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

