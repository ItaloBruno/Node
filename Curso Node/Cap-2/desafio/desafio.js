const port = 3000;
const chamar_html = require('./chamar_html');
var http = require('http');
const fs = require('fs');

var server = http.createServer((req, res)=>{
    chamar_html(res, req.url);
});     

server.listen(port, console.log(`Servidor rodando na porta ${port}`));