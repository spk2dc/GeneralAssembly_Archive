const express = require('express');
const router = express.Router();

const Log = require('../models/logs.js');

router.get('/seed', (req, res) => {
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

router.get('/', (req, res) => {
    Log.find((err, allLogs) => {
        res.render('index.ejs', {
            logs: allLogs,
        });
    });
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.get('/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        res.render('show.ejs', {
            log: foundLog,
        });
    });
});

router.get('/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        res.render('edit.ejs', {
            log: foundLog,
        });
    });
});

router.post('/', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.create(req.body, (err, newLog) => {
        res.redirect('/logs/' + newLog.id);
    });
});

router.put('/:id', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog) => {
        res.redirect('/logs');
    });
});

router.delete('/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deleteLog) => {
        res.redirect('/logs');
    });
});

module.exports = router;
