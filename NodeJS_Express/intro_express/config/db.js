const mysql = require('mysql');

const conexao = () =>{
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password:'root',
        database: 'curso_node'
    });
};

module.exports = conexao;