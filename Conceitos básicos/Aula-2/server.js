/**
 * Criando um pequeno servidor na porta 3000
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-type': 'text/html; charset = utf-8'});
    response.write('<h1>Tulio Maravilha</h1>');
    response.end();
});

server.listen(3000, console.log('Escutando na porta 3000!'));