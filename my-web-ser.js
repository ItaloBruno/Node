var http = require('http')

http.createServer(( req, res ) => { // req = requisição, res = resposta
	
	res.writeHead( 200, { 'Content-Type': 'text/plain' })
    res.end( 'Hello World\n' )
    
}).listen(3000)

console.log( 'Servidor rodando na porta 3000' )