const clienteModel = require('../models/clienteModel')();

module.exports.index = (request, response) =>{
    clienteModel.all((erro, resultado) =>{
        response.render('site/home', {clientes: resultado, erros: {}});
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
    var dados = request.body;
    //Validação de dados
    request.assert('nome', 'Preencha um Nome').notEmpty();

    //request.assert('email', 'Preencha');

    var validacaoErros = request.validationErrors();

    if(validacaoErros){
        console.log(validacaoErros);
        clienteModel.all((erro, resultado) =>{
            response.render('site/home', {clientes: resultado, erros: validacaoErros});
        });
        return;
    }

    clienteModel.save(dados, (erro, resultado) =>{
        if(!erro){
            response.redirect('/');
        }else{
            console.log("Erro ao adicionar novo registro");            
        }
    });
};

module.exports.delete = (request, response) =>{

};

