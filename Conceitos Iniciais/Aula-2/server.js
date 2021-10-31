/**
 * Criando um pequeno servidor na porta 3000, onde o usário pode acessar os arquivos definidos no servidor.
 * Se o usuário tentar acessar um arquivo inexistente, o servidor vai retornar uma página de erro.
 */

var http = require("http");
var fs = require("fs");

var server = http.createServer((request, response) => {
  var page = "index.html";
  if (request.url != "/") {
    page = request.url + ".html";
  }

  fs.readFile("./public/" + page, (err, data) => {
    var headStatus = 200;

    if (err) {
      headStatus = 404;
      data = fs.readFileSync("./error/404.html");
    }

    response.writeHead(headStatus, {
      "Content-type": "text/html; charset = utf-8",
    });
    response.write(data);
    response.end();
  });
});

server.listen(3000, console.log("Escutando na porta 3000!"));
