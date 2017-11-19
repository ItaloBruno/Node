const http      = require('http');
const num_porta = 3000;

var server = http.createServer( (req,res) => {
    var pagina = req.url;
    console.log(pagina);
    if(pagina == '/contato'){
        res.end(`
            <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Document</title>
                </head>
                
                <body>
                    <h1>Arriegua, me acharam!!</h1>
                </body>
            </html>
        `);
    }else{
        res.end(`
        <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            
            <body>
                <h1>Tou escondido!!!!</h1>
            </body>
        </html>
    `);
    }   
});

server.listen(num_porta, ()=>{
    console.log(`servidor rodando na porta ${num_porta}`);
    console.log(`digite localhost:${num_porta} no seu browser`);
});
