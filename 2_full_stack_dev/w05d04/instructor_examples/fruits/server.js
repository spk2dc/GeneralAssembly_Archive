const express = require('express');
const app = express();
const PORT = 3000;

// DATA
const fruits = [
  {
    name: 'apple',
    color: 'red',
    readyToEat: true
  },
  {
    name: 'pear',
    color: 'green',
    readyToEat: false
  },
  {
    name: 'banana',
    color: 'yellow',
    readyToEat: true
  }
]

// GET index
app.get('/', (req, res) => {
  res.send('I am at the root of the localhost');
})

// ROUTES

// /fruits/	GET	index
app.get('/fruits/', (req, res) => {
  res.send(fruits);
})

// /fruits/:id GET show
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  res.send(fruits[req.params.indexOfFruitsArray])
})


app.listen(PORT, () => {
  console.log('listening at port:3000');
})