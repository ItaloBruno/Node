module.exports = () =>{
    //Porta onde o servidor estará rodando
    const num_porta = 3000;

    //Configurações do Express
    const express           = require('express');
    const app               = express();
    const bodyParser        = require('body-parser');
    const expressValidator  = require('express-validator');

    //Setando o diretório de views e também que vamos trabalhar com arquivos EJS
    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    //Configurações para usar o body-parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    //Configurações para usar o express-validator
    app.use(expressValidator());

    //Importando as rotas e executando a função
    const rotas = require('../app/routes/web');
    rotas(app);

    //Criando o servidor na porta definicda por <num_porta>
    app.listen(num_porta, () =>{
        console.log(`servidor rodando na porta ${num_porta}`);
        console.log(`digite localhost:${num_porta} no seu browser`);
    });
};
