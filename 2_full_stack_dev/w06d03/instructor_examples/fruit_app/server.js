const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')

// middleware to help with the form submission
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

// mongoose connection logic
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// importing the fruit model
const Fruit = require('./models/fruits.js')

// ROUTES
// index
app.get('/fruits', (req, res)=>{
  Fruit.find({}, (error, allFruits)=>{
    res.render('index.ejs', {
      fruits: allFruits
      })
  })
})

// new
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs');
})

// post
app.post('/fruits/', (req, res)=>{
  if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else { //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, createdFruit)=>{
    res.redirect('/fruits');
  })
})

// show
app.get('/fruits/:id', (req, res) =>{
  Fruit.findById(req.params.id, (err, foundFruit)=>{
    res.render('show.ejs', {
      fruit: foundFruit,
    })
  })
})

// delete
app.delete('/fruits/:id', (req, res) => {
  res.send('deleting...')
})

// the app running the server
app.listen(3000, () => {
  console.log('listening')
})