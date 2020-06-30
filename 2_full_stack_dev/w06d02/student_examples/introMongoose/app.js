// Dependencies
const mongoose = require('mongoose');
const Tweet = require('./tweet.js');

// Global Configuration
const mongoURI = 'mongodb://localhost:27017/'+ 'tweets';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true}, () => {
  console.log('the connection with mongod is established');
});

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));