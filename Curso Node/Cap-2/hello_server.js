var http = require('http');
const port = 3000;

var server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Tulio Maravilha</h1>');
    response.end();
});

server.listen(port, console.log(`Servidor na porta ${port}`));