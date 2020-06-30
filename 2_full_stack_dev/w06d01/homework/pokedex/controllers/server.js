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
    // console.log('edit ', Pokemon[req.params.id]);
    res.render(require.resolve('../views/edit.ejs'), { data: Pokemon[req.params.id], id: req.params.id, allTypes: Pokemon[req.params.id].type.join(', ') })
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
    // console.log('req', req.body);

    Pokemon[req.params.id].name = req.body.name
    Pokemon[req.params.id].stats.hp = req.body.hp
    Pokemon[req.params.id].stats.attack = req.body.attack
    Pokemon[req.params.id].stats.defense = req.body.defense

    let typeStr = req.body.type
    Pokemon[req.params.id].type = typeStr.split(', ')
    console.log('updated pokemon ', Pokemon[req.params.id]);

    //only use resolve with file paths, don't use it with relative paths like in redirect links
    res.redirect('/pokemon')
})

// DESTROY
app.delete('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] })
})


// LISTENER
app.listen(port, () => {
    console.log('listening on ' + port)
})