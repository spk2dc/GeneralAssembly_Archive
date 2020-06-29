const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override');
const port = 3000

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//use methodOverride to add a query parameter to delete form named _method
app.use(methodOverride('_method'));

const Pokemon = require('../models/pokemon.js');


// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', { data: Pokemon })
})


// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] })
})

// NEW
app.get('/pokemon/new', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] })
})

// EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] })
})

// CREATE
app.post('/pokemon', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] })
})

// UPDATE
app.put('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] })
})

// DESTROY
app.delete('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] })
})


// LISTENER
app.listen(port,()=> {
    console.log('listening on ' + port)
})