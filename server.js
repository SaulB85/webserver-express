const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'saúl'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

// Heroku
const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {

    console.log(`Escuchando peticiones en el puerto ${puerto}`);

});