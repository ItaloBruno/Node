//Regras de negócio
module.exports = () =>{
    this.all = () =>{
        return [
            {nome: 'Italo', email: 'italobruno_207@hotmail.com'},
            {nome: 'Maria', email: 'mariadobairro@hotmail.com'}
        ];
    };

    //Retorna esse model com todas as regras estabelecidas
    return this;
};