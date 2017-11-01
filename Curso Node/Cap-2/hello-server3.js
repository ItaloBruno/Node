/**
 * Mesma lógica do hello-server.js. A diferença é que nesse exemplo introduzimos a ideia de rotas.
 */

var http = require('http');
const port = 3000;

var server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html'});

    if(request.url == '/')
        response.write('<h1>Tulio Maravilha</h1>');
    else if(request.url == '/bemvindo')
        response.write('<h1>Bem vindo, mojapa</h1>');
    else
        response.write('<h1>Pagina nao encontrada</h1>');
    
    response.end();
});

server.listen(port, console.log(`Servidor na porta ${port}`));