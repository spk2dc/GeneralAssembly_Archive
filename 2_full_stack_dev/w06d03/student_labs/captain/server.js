const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const db = mongoose.connection

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.listen(3000, () => {
    console.log('listening');
});

mongoose.connect('mongodb://localhost:27017/captain', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', 'mongodb://localhost:27017/captain'))
db.on('disconnected', () => console.log('mongo disconnected'))


const Logs = require('./models/logs.js');

//seed
app.get('/logs/seed', (req, res) => {
    let temp = [{
        title: 'testName1',
        entry: 'test description 1',
        shipIsBroken: true
    }, {
        title: 'testName2',
        entry: 'test description 2',
        shipIsBroken: false
    }, {
        title: 'testName3',
        entry: 'test description 3',
        shipIsBroken: true
    },]
    Logs.create(temp, (error, newLog) => {
        res.redirect('/logs');
    })
})

//new
app.get('/new', (req, res) => {
    res.render('new.ejs')
})

//create
app.post('/logs/', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false

    }

    Logs.create(req.body, (error, newLog) => {
        res.redirect('/logs');
    });
})

//index
app.get('/logs', (req, res) => {
    Logs.find({}, (error, allLogs) => {
        res.render('index.ejs', { logs: allLogs })

    });
})

//show
app.get('/logs/:id', (req, res) => {
    Logs.findById(req.params.id, (error, foundLog) => {
        res.render('show.ejs', { logs: foundLog })

    });
})

//delete
app.delete('/logs', (req, res) => {
    console.log(req.body.id);

    Logs.findByIdAndRemove(req.body.id, (error, foundLog) => {
        res.redirect('/logs')

    });
})

//edit
app.post('/logs/:id/edit', (req, res) => {
    Logs.findById(req.params.id, (err, foundLog) => {
        res.render('edit.ejs', { logs: foundLog })
    })
})

//update
app.put('/logs/:id', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false

    }

    Logs.create(req.body, (error, newLog) => {
        res.redirect('/logs');
    });
})