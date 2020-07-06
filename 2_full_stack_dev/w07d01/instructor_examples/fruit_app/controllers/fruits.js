const express = require('express');
const router = express.Router();

const Fruit = require('../models/fruits.js');

// ROUTES
// index
router.get('/', (req, res)=>{
  Fruit.find({}, (error, allFruits)=>{
    res.render('index.ejs', {
      fruits: allFruits
      })
  })
})

// new
router.get('/new', (req, res) => {
  res.render('new.ejs');
})

// post
router.post('/', (req, res)=>{
  if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else { //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, createdFruit)=>{
    res.redirect('/fruits');
  })
})

// edit
router.get('/:id/edit', (req, res)=>{
  Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
      res.render('edit.ejs', 
        { fruit: foundFruit, //pass in found fruit 
      })
  })
})

// update
router.put('/:id', (req, res)=>{
  if(req.body.readyToEat === 'on'){
      req.body.readyToEat = true;
  } else {
      req.body.readyToEat = false;
  }
  Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel)=> {
    res.redirect('/fruits');
  })
})

// show
router.get('/:id', (req, res) =>{
  Fruit.findById(req.params.id, (err, foundFruit)=>{
    res.render('show.ejs', {
      fruit: foundFruit,
    })
  })
})

// delete
router.delete('/:id', (req, res) => {
  Fruit.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{
    res.redirect('/fruits') //redirect back to fruits index
  })
})

module.exports = router;