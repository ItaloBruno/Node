//Importando as configurações do banco de dados
const db = require('../../config/db');

//Regras de negócio
module.exports = () =>{
    //====================================================================================
    this.all = (retorno) =>{
        //Instacia a conexão com o banco de dados
        const conexao = db();
        //Retorna a query que foi solicitada e o callback que foi implementado no web.js
        return conexao.query('SELECT * FROM clientes', retorno);
    };

    //====================================================================================
    this.find = (id, retorno) =>{
        //Instacia a conexão com o banco de dados
        const conexao = db();
        //Retorna a query que foi solicitada e o callback que foi implementado no web.js
        return conexao.query('SELECT * FROM clientes where idclientes = ?', id, retorno);
    };

    //====================================================================================
    this.save = (dados, retorno) =>{
        const conexao = db();
        return conexao.query('insert into clientes set ?', dados, retorno);
    };

    //====================================================================================
    this.delete = (dados, retorno) =>{
        const conexao = db();
        return conexao.query('delete from clientes where ?', dados, retorno);
    };

    //Retorna esse model com todas as regras estabelecidas
    return this;
};