const express = require('express')
const app = express()

// ROUTES

// new
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs');
})

// the app running the server
app.listen(3000, () => {
  console.log('listening')
})