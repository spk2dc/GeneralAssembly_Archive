const express = require('express')
const app = express()
const mongoose = require('mongoose')

// middleware to help with the form submission
app.use(express.urlencoded({extended:true}));

// mongoose connection logic
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});



// ROUTES
// new
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs');
})

// post
app.post('/fruits/', (req, res)=>{
  if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else { //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  res.send(req.body);
});

// the app running the server
app.listen(3000, () => {
  console.log('listening')
})