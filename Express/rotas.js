var express = require('express');
var app = express();

app.get('/', (req, res) =>{
    res.send('Tulio Maravilha');
});

app.listen(3000, console.log('Servidor na porta 3000!'));