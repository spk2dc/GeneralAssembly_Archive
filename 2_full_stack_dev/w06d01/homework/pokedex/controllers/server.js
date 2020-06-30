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
    res.render(require.resolve('../views/index.ejs'), { data: Pokemon })
})

// NEW
app.get('/pokemon/new', (req, res) => {
    res.render(require.resolve('../views/new.ejs'))
})

// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render(require.resolve('../views/show.ejs'), { data: Pokemon[req.params.id], id: req.params.id })
})

// EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] })
})

// CREATE
app.post('/pokemon', (req, res) => {
    //make correctly formatted object from request body object
    let obj = {
        name: req.body.name,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense
        },
    }
    let typeStr = req.body.type
    obj.type = typeStr.split(', ')

    console.log('req', obj);
    Pokemon.push(obj)

    //only use resolve with file paths, don't use it with relative paths like in redirect links
    res.redirect('/pokemon')
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
app.listen(port, () => {
    console.log('listening on ' + port)
})