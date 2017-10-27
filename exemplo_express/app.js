/*
    O aplicativo inicia um servidor e escuta a porta 3000
*/

var express = require('express');
var app = express();

//Usando arquivos estáticos
app.use(express.static('public'));

//Responde com "Túlio Maravilha quando uma solicitação GET é feita na homepage"
app.get('/', (requisicao, resposta) =>{
    resposta.send('Túlio Maravilha');
});

app.get('/inglaterra', (requisicao, resposta) =>{
    resposta.send('Ronaldinho');
});

app.get('/palaciodoplanalto', (requisicao, resposta) =>{
    resposta.send('Vampeta');
});


/* //Executa qualquer método de solicitação HTTP que é suportado no módulo http
app.all('/secret', (requisicao, resposta, next) =>{
    resposta.send('Túlio Maravilha');
    console.log('Acessando a seção secreta...');
    next();
}); */

//Abrindo e escutando a porta 3000
app.listen(3000, () =>{
    console.log('Servidor na porta 3000!');
});
