const fs = require("fs");

//console.log(fs)

let data = fs.readFileSync('carpeta/input.txt');
console.log("Mensaje:  " + data.toString());
