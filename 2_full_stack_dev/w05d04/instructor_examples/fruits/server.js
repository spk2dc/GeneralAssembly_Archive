const express = require('express');
const app = express();
const PORT = 3000;

const fruits = require('./models/fruits.js');
console.log(fruits);

// GET index
app.get('/', (req, res) => {
    res.send('I am at the root of the localhost');
})

// ROUTES

// /fruits/ GET index
app.get('/fruits/', (req, res) => {
    res.render('index.ejs', {
        allFruits: fruits,
    });
})

// /fruits/:id GET show
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('show.ejs', {
        fruit: fruits[req.params.indexOfFruitsArray],
    });
})

app.listen(PORT, () => {
  console.log('listening at port:3000');
});
