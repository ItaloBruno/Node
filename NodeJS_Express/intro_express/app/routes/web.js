const clienteController = require('../controllers/clienteController');

//Exportando as rotas
module.exports = (app) =>{
    //==========================================================
    app.get('/', (request, response) =>{
        clienteController.index(request, response);   
    });
    //==========================================================
    app.get('/detalhe/:id', (request, response) =>{
        clienteController.show(request, response);   
    });
    //==========================================================
    app.get('/contato', (request, response) =>{       
        response.render('site/contato');
    }); 
};