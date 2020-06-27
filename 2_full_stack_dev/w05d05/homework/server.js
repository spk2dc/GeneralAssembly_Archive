// dependencies
const express = require('express');
const app = express();

// port
const port = 3000;

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public'));

// data
const data = require('./models/budget.js')

// get route
app.get('/budgets', (req, res) => {
    // res.send(data)
    res.render('index.ejs', { data: data })
})

app.get('/budgets/new', (req, res) => {
    res.render('new.ejs', { data: data })
})

app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', { data: data, index: req.params.index })
})


// post route
app.post('/budgets', (req, res) => {
    console.log('req.body is: ', req.body);
    if (!req.body.name) {
        req.body.name = "NO DATA"
    }
    req.body.created_at = Date.now()
    data.push(req.body)
    console.log('all the data data: ', data)
    res.redirect('/data')
})

app.listen(port, () => console.log('Running on port: ', port));
