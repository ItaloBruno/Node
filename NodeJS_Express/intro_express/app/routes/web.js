var clienteModel = require('../models/clienteModel')();

//Exportando as rotas
module.exports = (app) =>{
    app.get('/', (request, response) =>{

        //console.log(clienteModel.all());
        var listaClientes = clienteModel.all();

        response.render('site/home', {clientes: listaClientes});
    });
    
    app.get('/contato', (request, response) =>{       
        response.render('site/contato');
    }); 
};