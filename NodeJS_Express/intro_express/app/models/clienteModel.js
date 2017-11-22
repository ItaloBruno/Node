//Importando as configurações do banco de dados
const db = require('../../config/db');

//Regras de negócio
module.exports = () =>{
    this.all = (retorno) =>{
        //Instacia a conexão com o banco de dados
        const conexao = db();
        //Retorna a query que foi solicitada e o callback que foi implementado no web.js
        return conexao.query('SELECT * FROM clientes',retorno);
    };

    //Retorna esse model com todas as regras estabelecidas
    return this;
};