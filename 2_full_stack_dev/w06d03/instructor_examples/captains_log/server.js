const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Log = require('./models/logs.js');

app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost:27017/captains_log', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use(express.urlencoded({ extended: false }));

app.get('/logs/seed', (req, res) => {
    Log.remove(() => {
        Log.create([
            {
                title: 'Title 1',
                entry: 'Log entry 1',
                shipIsBroken: false,
            },
            {
                title: 'Title 2',
                entry: 'Log entry 2',
                shipIsBroken: true,
            },
            {
                title: 'Title 3',
                entry: 'Log entry 3',
            },
        ], (err, data) => {
            res.redirect('/logs');
        });
    })
});

app.get('/logs', (req, res) => {
    Log.find((err, allLogs) => {
        res.render('index.ejs', {
            logs: allLogs,
        });
    });
});

app.get('/logs/new', (req, res) => {
    res.render('new.ejs');
});

app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        res.render('show.ejs', {
            log: foundLog,
        });
    });
});

app.get('/logs/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        res.render('edit.ejs', {
            log: foundLog,
        });
    });
});

app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.create(req.body, (err, newLog) => {
        res.redirect('/logs/' + newLog.id);
    });
});

app.put('/logs/:id', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog) => {
        res.redirect('/logs');
    });
});

app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deleteLog) => {
        res.redirect('/logs');
    });
});

app.listen(3000, () => {
    console.log('listening');
});
