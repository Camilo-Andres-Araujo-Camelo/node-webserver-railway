const http = require('http');
const { restart } = require('nodemon');

http.createServer((req, res) => {

    res.write( 'Hola Mundo' );
    res.end();

})
.listen( 8080 );

console.log('Escuchando en el puerto', 8080)