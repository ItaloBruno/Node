//Exportando as rotas
module.exports = (app) =>{
    app.get('/', (request, response) =>{
        response.render('site/home');
    });
    
    app.get('/contato', (request, response) =>{
        response.render('site/contato');
    }); 
};