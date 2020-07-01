// *******************************************//
// Everything provided to students in markdown start
// *******************************************//

// Dependencies
const mongoose = require('mongoose')
const db = mongoose.connection

// Config
const mongoURI = 'mongodb://localhost:27017/hotel'

// Models
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    console.log('The connection with mongod is established')
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

// Hotel.collection.drop()

// Hotel.create(hotelSeed, (err, data) => {
//     if (err) console.log(err.message)
//     console.log('added provided hotel data')
// })

Hotel.countDocuments({}, (err, data) => {
    if (err) console.log(err.message)
    console.log(`There are ${data} hotels in this database`)
})

// *******************************************//
// Everything provided to students end
// *******************************************//

let tempArr = [
    {
        name: 'testHotel1',
        location: 'testLoc1',
        rating: 3,
        vacancies: true,
        tags: ['tag1'],
        rooms: [
            {
                roomNumber: 17,
                size: 'big',
                price: 25,
                booked: false
            }
        ]
    }
]

//Create a hotel using the above schema
// Hotel.insertMany(tempArr, (error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }
//     // get control of terminal back
//     // you can also just use control-c
//     db.close();
// });

// let's find all our hotels and console.log them
// Hotel.find((error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }
//     // get control of terminal back
//     // you can also just use control-c
//     db.close();
// });

// find all the hotels but only return the hotel name and console.log them
// Hotel.find({}, 'name -_id', (error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }
//     // get control of terminal back
//     // you can also just use control-c
//     db.close();
// });

// find just your hotel using a search parameter that would only match your hotel
// Hotel.find({ name: 'testHotel1' }, {}, (error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }
//     // get control of terminal back
//     // you can also just use control-c
//     db.close();
// });

// find all the hotels that have vacancies, also exclude ratings.
// Hotel.find({vacancies: true}, '-rating', (error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }
//     // get control of terminal back
//     // you can also just use control-c
//     db.close();
// });


// turns out Hotelicopter was an April Fool's prank! Let's delete that one from our database
// Hotel.deleteOne({name: 'Hotelicopter'}, (error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }
//     // get control of terminal back
//     // you can also just use control-c
//     db.close();
// });

// Hilbert's Hotel is getting terrible ratings all it does is give everyone headaches and no room service. Let's just remove that one as well
// Hotel.deleteOne({name: "Hilbert's Hotel"}, (error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }
//     // get control of terminal back
//     // you can also just use control-c
//     db.close();
// });

// The hotel in the Colorado Rockies has been closed for undisclosed reasons. Delete this hotel too
// Hotel.deleteOne({location: "Colorado Rockies"}, (error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }
//     // get control of terminal back
//     // you can also just use control-c
//     db.close();
// });

// The Great Northern's rating is only a 3! Update that to be a 5
// Hotel.findOneAndUpdate({ name: "The Great Northern" }, { rating: 5 }, { new: true }, (error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }
//     // get control of terminal back
//     // you can also just use control-c
//     db.close();
// });

// Motel Bambi is now fully booked, change the vacancies to false
// Hotel.findOneAndUpdate({ name: "Motel Bambi" }, { vacancies: false }, { new: true }, (error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }
//     // get control of terminal back
//     // you can also just use control-c
//     db.close();
// });

// Things are on the decline for the Motel in 'White Bay, Oregon', change the rating to 2
// Hotel.findOneAndUpdate({ location: "White Bay, Oregon" }, { rating: 2 }, { new: true }, (error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }
//     // get control of terminal back
//     // you can also just use control-c
//     db.close();
// });

// Hungry for more
// update the prices of each of the rooms at Fawlty Towers
// Hotel.find({ name: 'Fawlty Towers' }, (error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }
//     for (const itr of data[0].rooms) {
//         itr.price = 13
//         console.log(itr);

//     }
//     db.close();
// });
// Hotel.find({ name: 'Fawlty Towers' }, (error, data) => {
//     console.log(data);
//     for (const itr of data[0].rooms) {
//         console.log(itr);

//     }
//     db.close();
// })

// find the hotel with an indoor pool as a tag
// Hotel.find({ tags: { $in: 'indoor pool' } }, (error, data) => {
//     if (error) { // if there is an error console log it
//         console.log(error);
//     } else { // else show us the created data
//         console.log(data);
//     }

//     db.close();
// });

// The PR firm for the Hyperion Hotel has demanded that 'crime' is taken off as a keyword, remove that keyword
Hotel.updateOne({ tags: 'crime' }, { $pop: { tags: -1 } }, (error, data) => {
    if (error) { // if there is an error console log it
        console.log(error);
    } else { // else show us the created data
        console.log(data);
    }
});
Hotel.find({ name: 'Hyperion Hotel' }, (error, data) => {
    if (error) { // if there is an error console log it
        console.log(error);
    } else { // else show us the created data
        console.log(data);
    }

    db.close();
})