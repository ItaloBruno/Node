// Requisitando o arquivo parser.js
var Parser = require('./parser')

// Carregandoo módulo fs (filesystem)
var fs = require('fs')

// Lendo o conteúdo do arquivo para a memória
fs.readFile('example-log.txt', function ( err, logData ) {
	
	// Se um erro ocorrer, irá ser lançada
	// a exceção e a app será encerrada
	if ( err ) throw err

	// logData é um Buffer, converta-o para string
	var text = logData.toString()

	// Criando uma instância do objeto Parser
	var parser = new Parser()

	// Chame a função parse
	console.log( parser.parse( text ) )
	// { A: 2, B: 14, C: 6 }
})

//===================================================================================

// // Carregando o módulo fs (filesystem)
// var fs = require('fs')

// // Leia o conteúdo do arquivo para a memória
// fs.readFile('example-log.txt', (err, logData) =>{
// 	// Se um erro ocorrer, será lançada uma
// 	// exceção, e a aplicação irá ser encerrada
// 	if ( err ) throw err

// 	// logData é um Buffer, converta-o para string
//     var text = logData.toString()
//     var results = {}
    
//     // Quebrando o arquivo em linhas
//     var lines = text.split( '\n' )
    
//     lines.forEach(line => {
//         //Quebra a linha em partes
//         let parts = line.split( ' ' )

//         //Pega a letra e coloca como índice
//         let letter = parts[ 1 ]

//         //Contador responsável por guardar a soma dos dígitos de cada letra
//         let count = parseInt( parts[ 2 ] )
    
//         if ( !results[ letter ] ) {
//             results[ letter ] = 0
//         }

//         results[ letter ] += parseInt( count )
//     })
    
//     console.log( results )
//     // { A: 2, B: 14, C: 6, D: 40}
// })

