const clienteModel = require('../models/clienteModel')();

module.exports.index = (request, response) =>{
    clienteModel.all((erro, resultado) =>{
        response.render('site/home', {clientes: resultado});
    });
};

module.exports.show = (request, response) =>{
    clienteModel.find(request.params.id, (erro, resultado) =>{
        if(resultado[0] && !erro){
            response.render('site/detalhe', {cliente: resultado[0]});
        }else{
            console.log("Esse registro não existe");
            response.redirect('/');
        }
    });
};

module.exports.store = (request, response) =>{
    
};

module.exports.delete = (request, response) =>{

};

