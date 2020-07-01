const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const db = mongoose.connection

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('listening');
});

mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

//new
app.get('/new', (req, res) => {
    res.render('new.ejs')
})

//create
app.post('/logs', (req, res) => {
    res.send(req.body)
})