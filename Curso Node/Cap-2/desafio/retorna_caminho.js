const caminhos_html = require('./caminhos_html');
module.exports = retorna_caminho = (url)=>{
    let caminho = caminhos_html[url];
    if (caminho){
        return caminho;
    }else{
        return '/erro.html';
    }
};