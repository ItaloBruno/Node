//Importando as configurações do banco de dados
const db = require('../../config/db');

//Regras de negócio
module.exports = () =>{
    //====================================================================================
    //Retorna todos os registros que possuo na tabela clientes que se encontra no banco de dados
    this.all = (retorno) =>{
        //Instacia a conexão com o banco de dados
        const conexao = db();
        //Retorna a query que foi solicitada e o callback que foi implementado no web.js
        return conexao.query('SELECT * FROM clientes', retorno);
    };

    //====================================================================================
    //Retorna o registro no banco de dados correspondente ao id que o usuário repassou na url
    this.find = (id, retorno) =>{
        //Instacia a conexão com o banco de dados
        const conexao = db();
        //Retorna a query que foi solicitada e o callback que foi implementado no web.js
        return conexao.query('SELECT * FROM clientes where idclientes = ?', id, retorno);
    };

    //====================================================================================
    //Adiciona um registro no banco de dados
    this.save = (dados, retorno) =>{
        //Instacia a conexão com o banco de dados
        const conexao = db();
        //Retorna a query que foi solicitada e o callback que foi implementado no web.js
        return conexao.query('insert into clientes set ?', dados, retorno);
    };

    //====================================================================================
    //Atualiza todos os registros no banco com o nome que foi repassado pelo usuário
    this.update = (dados, retorno) =>{
        //Instacia a conexão com o banco de dados
        const conexao = db();
        //Montando a query para usar no update
        var query = `UPDATE clientes SET email = "${dados.email}" where nome = "${dados.nome}"`;
        //Retorna a query que foi solicitada e o callback que foi implementado no web.js
        return conexao.query(query, retorno);
    };

    //====================================================================================
    //Deleta todos os registros no banco com o nome que foi repassado  pelo usuário
    this.delete = (dados, retorno) =>{
        //Instacia a conexão com o banco de dados
        const conexao = db();
        //Retorna a query que foi solicitada e o callback que foi implementado no web.js        
        return conexao.query('delete from clientes where ?', dados, retorno);
    };

    //Retorna esse model com todas as regras estabelecidas
    return this;
};