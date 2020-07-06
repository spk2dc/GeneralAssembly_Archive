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

const fruitsController = require('./controllers/fruits.js')
app.use('/fruits', fruitsController)

// the app running the server
app.listen(3000, () => {
  console.log('listening')
})