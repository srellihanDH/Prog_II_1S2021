let termine = () => console.log("Termine");

let multiplicar = (a,b,callback) => {
    console.log(a*b);
    callback();
    return "ok";
}

console.log(multiplicar(2, 3, termine));
