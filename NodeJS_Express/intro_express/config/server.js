module.exports = () =>{
    //Porta onde o servidor estará rodando
    const num_porta = 3000;

    //Configurações do Express
    const express   = require('express');
    const app       = express();

    //Setando o diretório de views e também que vamos trabalhar com arquivos EJS
    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    //Importando as rotas e executando a função
    const rotas = require('../app/routes/web');
    rotas(app);

    //Criando o servidor na porta definicda por <num_porta>
    app.listen(num_porta, ()=>{
        console.log(`servidor rodando na porta ${num_porta}`);
        console.log(`digite localhost:${num_porta} no seu browser`);
    });
};
