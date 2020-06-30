/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/' + 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
  console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/

var vampire = {
  name: 'Chocula',
  title: 'Count',
  hair_color: 'brown',
  eye_color: 'brown',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['cereal', 'marshmallows'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 2,
}

// Vampire.remove()

//to be run once and then commented out
Vampire.insertMany(seedData, (err, vampires) => {
  if (err) { console.log(err) }
  console.log("added provided vampire data", vampires)
  mongoose.connection.close();
});

let tempArr = [
  {
    name: 'vamp1',
    title: 'vamptitle1',
    hair_color: 'black',
    eye_color: 'black',
    dob: new Date(2020, 2, 13, 7, 47),
    loves: ['cookies', 'blood'],
    location: 'General Assembly',
    gender: 'm',
    victims: 13,
  },
  {
    name: 'vamp2',
    title: 'vamptitle2',
    hair_color: 'black',
    eye_color: 'black',
    dob: new Date(2020, 2, 13, 7, 47),
    loves: ['cookies', 'blood'],
    location: 'General Assembly',
    gender: 'm',
    victims: 13,
  },
  {
    name: 'vamp3',
    title: 'vamptitle3',
    hair_color: 'black',
    eye_color: 'black',
    dob: new Date(2020, 2, 13, 7, 47),
    loves: ['cookies', 'blood'],
    location: 'General Assembly',
    gender: 'm',
    victims: 13,
  },
  {
    name: 'vamp4',
    title: 'vamptitle4',
    hair_color: 'black',
    eye_color: 'black',
    dob: new Date(2020, 2, 13, 7, 47),
    loves: ['cookies', 'blood'],
    location: 'General Assembly',
    gender: 'm',
    victims: 13,
  },
]

//insert all objects in the array into vampire data
// Vampire.insertMany(tempArr, (error, data) => {
//   if (error) { // if there is an error console log it
//     console.log(error);
//   } else { // else show us the created data
//     console.log(data);
//   }
//   // get control of terminal back
//   // you can also just use control-c
//   db.close();
// });

//find all data in vampire database
// Vampire.find((err, data) => {
//   console.log('error: ', err);
//   console.log(data);
//   db.close();
// });
