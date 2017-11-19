//Porta onde o servidor estará rodando
const num_porta = 3000;

//Importanto as configurações que foram feitas no arquivo server.js
const app = require('./config/server');

//===============================================================
app.get('/contato', (request, response) =>{
    response.render('site/contato');
});

app.get('/', (request, response) =>{
    response.render('site/home');
});

//===============================================================
app.listen(num_porta, ()=>{
    console.log(`servidor rodando na porta ${num_porta}`);
    console.log(`digite localhost:${num_porta} no seu browser`);
});
