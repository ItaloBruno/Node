const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'1234',
    database: 'curso_node'
});



//Regras de negócio
module.exports = () =>{
    this.all = () =>{

        conexao.query('SELECT * FROM clientes', (erro, resultado) =>{
            console.log(resultado);
        });

        return [
            {nome: 'Italo', email: 'italobruno_207@hotmail.com'},
            {nome: 'Maria', email: 'mariadobairro@hotmail.com'}
        ];
    };

    //Retorna esse model com todas as regras estabelecidas
    return this;
};