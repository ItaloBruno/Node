/**
 * Esse arquivo pega a query string que você coloca na url e imprime na tela
 * ex : localhost:3000?<SeuNome>
 * Será impresso na tela o SeuNome ou qualquer coisa que você digitar depois do ponto de interrogação
 */
var http = require('http');
var url = require('url');
const port = 3000;

var server = http.createServer((req, res, next)=>{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Dados da query string</h1>");
    var result = url.parse(req.url);
    
    // for(var key in result.query){
    //     res.write("<h2>"+key+" : "+result.query[key]+"</h2>");
    // }
    res.write("<h2>"+result.query+"</h2>");
    res.end();
}); 


server.listen(port, console.log(`Servidor na porta ${port}`));