/*
 * Exemplo de leitura de arquivos de forma síncrona e assíncrona
 */

var fs = require("fs");

console.log("asy before");

fs.readFile("./Files/UML.pdf", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("asy executed");
});

console.log("asy after");

//==========================================================

console.log("sy before");

var data = fs.readFileSync("./Files/UML.pdf");
console.log(data, "sy executed");

console.log("sy after");
