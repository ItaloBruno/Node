const express   = require('express');
const num_porta = 3000;

var app = express();
app.set('view engine', 'ejs');



app.get('/contato', (request, response) =>{
    response.render('site/contato');
});

app.get('/', (request, response) =>{
    response.render('site/home');
});


app.listen(num_porta, ()=>{
    console.log(`servidor rodando na porta ${num_porta}`);
    console.log(`digite localhost:${num_porta} no seu browser`);
});
