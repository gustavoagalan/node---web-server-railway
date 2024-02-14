const http = require('http');

http.createServer((request, response)=> {

   // console.log(request);
    response.write('Hola Mundo Maria Sofia Galanbbbb');
    response.end();
} ).listen(8080);


console.log('Escuchando el puerto', 8080);
