var fs = require('fs');
const retorna_caminho = require('./retorna_caminho');
module.exports = (res, caminho) => fs.readFile(__dirname + retorna_caminho(caminho), (err, html)=>{

        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end();

});