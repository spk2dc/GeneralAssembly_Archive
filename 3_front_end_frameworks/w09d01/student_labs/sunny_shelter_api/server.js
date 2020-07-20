const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 3003

// middleware
app.use(express.json()); //use .json(), not .urlencoded()
const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions)) // all routes are now exposed, sometimes you just want to limit access

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

// Database connection
mongoose.connect('mongodb://localhost:27017/shelter', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

// Controllers/Routes
const router = require('./controllers/router.js')
app.use('/shelter', router)


// Listen
app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊')
  })