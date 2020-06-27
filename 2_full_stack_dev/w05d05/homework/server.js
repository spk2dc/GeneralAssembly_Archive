// dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// port
const port = 3000;

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public'));

// const $ = require('jquery')

// data
const data = require('./models/budget.js')

// if (bankAcct > 500) {
//     $('account').css('color', 'green')
// } else {
//     $('account').css('color', 'red')
// }

// get route
app.get('/budgets', (req, res) => {
    // res.send(data)
    let bankAcct = 0
    for (let itr of data) {
        bankAcct += parseInt(itr.amount)
    }
    res.render('index.ejs', { data: data, bankAcct: bankAcct })
})

app.get('/budgets/new', (req, res) => {
    res.render('new.ejs', { data: data })
})

app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', { data: data, index: req.params.index })
})


// post route
app.post('/budgets', (req, res) => {
    console.log('req.body is: ');
    console.log(req.body);
    let input = req.body
    input.tags = input.tags.split(', ')
    console.log(input);

    data.push(req.body)
    // console.log('all the data: ', data)
    res.redirect('/budgets')
})

app.listen(port, () => console.log('Running on port: ', port));
