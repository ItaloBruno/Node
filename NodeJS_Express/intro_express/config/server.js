//Configurações do Express
const express   = require('express');
const app       = express();

//Setando o diretório de views e também que vamos trabalhar com arquivos EJS
app.set('view engine', 'ejs');
app.set('views','./app/views');

module.exports = app;