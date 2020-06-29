//dependencies
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//include the method-override package
const methodOverride = require('method-override');

// port
const port = 3000;

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

let data = require('./data.js')

//routes
app.get('/index', (req, res) => {
    // res.send('this is the index route')
    // console.log('data: ', data);
    res.render('index.ejs', { data: data })
})

app.get('/new', (req, res) => {
    // res.send('this is the new route')
    res.render('new.ejs')
})

//create route
app.post('/index', (req, res) => {
    data.push(req.body)
    // console.log(req.body);

    res.redirect('/index')
})

//delete
app.delete('/index/:id', (req, res) => {
    // console.log('param: ', req.params);
    if (!data[req.params.id].hasOwnProperty('verified')) {
        data.splice(req.params.id, 1); //remove the item from the array
    }
    res.redirect('/index');  //redirect back to index route
});

app.delete('/index/delete/all', (req, res) => {
    // console.log('param: ', req.params);

    data.splice(0, data.length); //remove the item from the array
    res.redirect('/index');  //redirect back to index route
});

//edit
app.get('/index/:id/edit', (req, res) => {
    console.log('edit data: ', data);
    
    res.render(
        'edit.ejs', //render views/edit.ejs
        { //pass in an object that contains
            data: data,
            id: req.params.id
        }
    )
})

//update
app.put('/index/:id', (req, res) => {
    console.log('update data: ', req.body);
    data[req.params.id] = req.body
    res.redirect('/index')
})

//listener
app.listen(port, () => console.log('Running on port: ', port));
