const clienteModel = require('../models/clienteModel')();

module.exports.index = (request, response) =>{
    var url = request.url;
    clienteModel.all((erro, resultado) =>{
        if(url == '/')
            url = '/home';
        response.render(`site${url}`, { clientes: resultado, erros: {}, dados: {} });
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
    request.assert('nome', 'O nome deve ter de 3 a 20 caracteres').len(3, 20);

    request.assert('email', 'Preencha um email').notEmpty();
    request.assert('email', 'Preencha um email válido').isEmail();

    var validacaoErros = request.validationErrors();

    if(validacaoErros){
        console.log(validacaoErros);
        clienteModel.all((erro, resultado) =>{
            response.render('site/home', {clientes: resultado, erros: validacaoErros,dados: dados});
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
    clienteModel.all((erro, resultado) =>{
        response.render('site/deletar', { clientes: resultado, erros: {}, dados: {} });
    });
    var dados = request.body;
    console.log(dados);
};

