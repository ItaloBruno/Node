var http = require('http');
var fs = require('fs');

const port = 3000;

var server = http.createServer((req, res)=>{

    fs.readFile(__dirname + '/index.html', (err, html)=>{
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end();
    });
});

server.listen(port, console.log(`servidor rodando na porta ${port}`));
