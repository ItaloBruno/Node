const clienteController = require('../controllers/clienteController');

//Exportando as rotas
module.exports = (app) =>{
    //==========================================================
    app.get('/', (request, response) =>{
        clienteController.show(request, response);   
    });
    //==========================================================
    app.get('/detalhe/:id', (request, response) =>{
        clienteController.index(request, response);   
    });


    //==========================================================
    app.get('/cadastrar', (request, response) =>{
        clienteController.show(request, response);   
    });
    //==========================================================
    app.post('/cadastrar', (request, response) =>{       
        clienteController.store(request, response);
    });


    //==========================================================
    app.get('/atualizar', (request, response) =>{
        clienteController.show(request, response);    
    });
    //==========================================================
    app.post('/atualizar', (request, response) =>{       
        clienteController.update(request, response);
    }); 
    

    //==========================================================
    app.get('/deletar', (request, response) =>{
        clienteController.show(request, response);   
    });
    //==========================================================
    app.post('/deletar', (request, response) =>{       
        clienteController.delete(request, response);
    });  
};