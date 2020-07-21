const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3003;


// Error / Disconnection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/holidays';
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

// middleware
app.use(express.json()); //use .json(), not .urlencoded()

const whitelist = ['http://localhost:3000', 'https://hidden-hollows-06653.herokuapp.com'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) >= 0) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));


const holidaysController = require('./controllers/holidays.js')
app.use('/holidays', holidaysController)


app.listen(PORT, () => {
  console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
})