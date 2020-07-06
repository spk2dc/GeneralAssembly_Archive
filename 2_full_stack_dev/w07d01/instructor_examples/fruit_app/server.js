const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config();
const session = require('express-session');

const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI

// middleware to help with the form submission
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.use(
  session({
    secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
  })
)

// mongoose connection logic
mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// importing the fruit model
const Fruit = require('./models/fruits.js')

const fruitsController = require('./controllers/fruits.js')
app.use('/fruits', fruitsController)

// User controller
const userController = require('./controllers/users.js');
app.use('/users', userController);

// Session controller
const sessionController = require('./controllers/sessions.js');
app.use('/sessions', sessionController);

// the app running the server
app.listen(PORT, () => {
  console.log('listening')
})