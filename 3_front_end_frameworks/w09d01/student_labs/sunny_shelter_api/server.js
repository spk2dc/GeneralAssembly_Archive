const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./controllers/router.js')
const PORT = 3003

app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
})

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


mongoose.connect('mongodb://localhost:27017/shelter', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

// middleware
app.use(express.json()); //use .json(), not .urlencoded()
app.use('/shelter', router)
