/*Cria um servidor estático de arquivos, onde posso acessar qualquer arquivo que esteja dentro 
da pasta arquivos e mostrará no browser - Formato do endereço => localhost:3000<nomeDoArquivo>*/
const express = require('express')
const app = express()

app.use(express.static('arquivos'))

app.listen(3000)

console.log( 'Servidor rodando na porta 3000' )

