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
    app.post('/', (request, response) =>{       
        clienteController.store(request, response);
    });
    //==========================================================
    app.get('/deletar', (request, response) =>{
        clienteController.index(request, response);   
    });
    //==========================================================
    app.post('/deletar', (request, response) =>{       
        clienteController.delete(request, response);
    });  
};