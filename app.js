require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT;



// TODO: require ('hbs')
// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public') );

// app.get('/', function (req, res) {
//   res.send('Home page')
// }) // Como ya se está enviando una respuesta en el app use, esto no se llega a ejecutar

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Camilo',
        titulo: 'Curso de Node js'
    });
});

app.get('/generic', function (req, res) {
    res.render('elements', {
        nombre: 'Camilo',
        titulo: 'Curso de Node js'
    });
});

app.get('/elements', function (req, res) {
    res.render('generic', {
        nombre: 'Camilo',
        titulo: 'Curso de Node js'
    });
});


app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html' )
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});