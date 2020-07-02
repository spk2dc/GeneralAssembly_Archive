const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const router = require('./controllers/router.js');
app.use(router);

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

//MONGOOSE SETUP
const mongoose = require('mongoose')
const db = mongoose.connection
const uri = 'mongodb://localhost:27017/store'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

db.on('error', (err) => {
    console.log(`Error: ${err}. Is Mongod not running?`);
})
db.on('connected', () => {
    console.log(`mongo connected: `, uri);
})
db.on('disconnected', (err) => {
    console.log(`mongo disconnected`);
})




//LISTENER
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})