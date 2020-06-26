// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');
// =======================================
//              ROUTES
// =======================================
// index route
app.get('/bakedgoods', (req, res) => {
  res.render('index.ejs', {
    bakedGoods: bakedGoods,
  });
});

// new route
app.get('/bakedgoods/new', (req, res) => {
  res.render('new.ejs');
})

// show route
app.get('/bakedgoods/:id', (req, res) => {
  res.render('show.ejs', {
    bakedGood: bakedGoods[req.params.id],
  });
});

app.post('/bakedgoods', (req, res) => {
  bakedGoods.push(req.body);
  res.redirect('/bakedgoods');
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
