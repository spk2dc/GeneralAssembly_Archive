const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    // add your code here to set up your schema
    name: { type: String, required: true, unique: true },
    location: { type: String },
    rating: { type: Number, capped: true, max: 5 },
    vacancies: { type: Boolean },
    tags: [{ type: String }],
    rooms: [
        {
            roomNumber: Number,
            size: String,
            price: Number,
            booked: Boolean
        }
    ]
}, 
{ 
    timestamps: true 
});

const Hotels = mongoose.model('Hotels', hotelSchema);

//make this exportable to be accessed in `app.js`
module.exports = Hotels;
