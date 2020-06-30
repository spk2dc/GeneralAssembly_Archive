const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  // add your code here to set up your schema
  name: { type: String, required: true },
  title: { type: String },
  hair_color: { type: String, default: 'blonde' },
  eye_color: String,
  dob: { type: Date, default: Date.now },
  loves: [String, String],
  location: String,
  gender: String,
  victims: { type: Number, capped: true, min: 0 },
});

const Vampire = mongoose.model('Vampire', vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;
