var clienteModel = require('../models/clienteModel')();

//Exportando as rotas
module.exports = (app) =>{
    //==========================================================
    app.get('/', (request, response) =>{

        clienteModel.all((erro, resultado)=>{
            response.render('site/home', {clientes: resultado});
        });
   
    });
    //==========================================================
    app.get('/contato', (request, response) =>{       
        response.render('site/contato');
    }); 
};