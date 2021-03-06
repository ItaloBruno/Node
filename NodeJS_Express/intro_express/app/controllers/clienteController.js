const clienteModel = require('../models/clienteModel')();

//Controle responsável por mostrar todos os dados da tabela criente e renderizar de acordo com cada solicitação
module.exports.show = (request, response) =>{
    var url = request.url;
    clienteModel.all((erro, resultado) =>{
        if(url == '/')
            url = '/home';
        response.render(`site${url}`, { clientes: resultado, erros: {}, dados: {} });
    });
};

//Controle responsável por mostrar o registro com o id que o usuário colocou na url, mostrando os seus detalhes de forma individual.
module.exports.index = (request, response) =>{
    clienteModel.find(request.params.id, (erro, resultado) =>{
        if(resultado[0] && !erro){
            response.render('site/detalhe', {cliente: resultado[0]});
        }else{
            console.log("Esse registro não existe");
            response.redirect('/');
        }
    });
};

//Controle responsável por salvar um novo registro na tabela clientes
module.exports.store = (request, response) =>{
    var dados = request.body;
    //Validação de dados
    request.assert('nome', 'Preencha um Nome').notEmpty();
    request.assert('nome', 'O nome deve ter de 3 a 20 caracteres').len(3, 20);

    request.assert('email', 'Preencha um email').notEmpty();
    request.assert('email', 'Preencha um email válido').isEmail();

    var validacaoErros = request.validationErrors();

    if(validacaoErros){
        //console.log(validacaoErros);
        clienteModel.all((erro, resultado) =>{
            response.render('site/home', {clientes: resultado, erros: validacaoErros, dados: dados});
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

//Controle responsável por atualizar o email de todos os registros com o nome especificado pelo usuário
module.exports.update = (request, response) =>{
    var dados = request.body;
    //Validação de dados
    request.assert('nome', 'Preencha um Nome').notEmpty();
    request.assert('nome', 'O nome deve ter de 3 a 20 caracteres').len(3, 20);

    request.assert('email', 'Preencha um email').notEmpty();
    request.assert('email', 'Preencha um email válido').isEmail();

    var validacaoErros = request.validationErrors();

    if(validacaoErros){
        //console.log(validacaoErros);
        clienteModel.all((erro, resultado) =>{
            response.render('site/atualizar', {clientes: resultado, erros: validacaoErros, dados: dados});
        });
        return;
    }

    clienteModel.update(dados, (erro, resultado) =>{
        if(!erro){
            response.redirect('/');
        }else{
            console.log(erro);
            console.log("Erro ao atualizar registro");            
        }
    });
};

//Controle responsável por deletar todos os registros da tabela clientes que possuem o nome especificado pelo usuário
module.exports.delete = (request, response) =>{
    var dados = request.body;
    //Validação de dados
    request.assert('nome', 'Preencha um Nome').notEmpty();
    request.assert('nome', 'O nome deve ter de 3 a 20 caracteres').len(3, 20);

    var validacaoErros = request.validationErrors();

    if(validacaoErros){
        //console.log(validacaoErros);
        clienteModel.all((erro, resultado) =>{
            response.render('site/deletar', {clientes: resultado, erros: validacaoErros, dados: dados});
        });
        return;
    }

    clienteModel.delete(dados, (erro, resultado) =>{
        if(!erro){
            response.redirect('/');
        }else{
            console.log("Erro ao deletar registro");            
        }
    });
};

