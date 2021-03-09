function sumar (a,b) {
    return a+b;
}

let restar = (a,b) => a-b;
let multiplicar = (a,b) => a*b;
let dividir = (a,b) => {
    if(b == 0)
        return a;
    else     
        return a/b;
};

let calculadoraFuncion = (a,b,operacion) => operacion(a,b);

let calculadoraObjeto = {
    sumar: (a,b) => a+b,
    restar: (a,b) => a-b,
    multiplicar: (a,b) => a*b,
    dividir: (a,b) => {
		if(b == 0)
			return a;
		else     
			return a/b;
		}
}

let hombres = 10;
let mujeres = 10;

console.log("El total de personas es " + calculadoraFuncion(hombres, mujeres, sumar));

let ahorros = 10;
let gastos = 5;

console.log("El total de ahorros ahora es " + calculadoraFuncion(ahorros, gastos, restar));
console.log("El total de ahorros ahora es " + calculadoraObjeto.restar(ahorros, gastos));

let precio = 5;
let cantidad = 3;

console.log("El total a pagar es " + calculadoraFuncion(precio, cantidad, multiplicar));

let cuenta = 1000;
let personas = 0;

console.log("El total a pagar cada uno es " + calculadoraFuncion(cuenta, personas, dividir));
