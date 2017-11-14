var fs = require('fs');

for(let i = 0; i <= 5; i++){
    let file = "async-txt" + i + ".txt";
    fs.writeFile(file, "Hello Node.js!", (err, out)=>{
        console.log(out);
    });
}