const express = require('express')
const app = express()

// access the data in this file
const sightingsData = require('./sightings.json')

// test it
// console.log(sightingsData[0])

// access the argument
const args = process.argv[2]
console.log('terminal argument: ', args)
let param = args.split('=')[0]
let val = args.split('=')[1]

for (let i = 0; i < sightingsData.length; i++) {
    if (sightingsData[i][param] === val) {
        // console.log(sightingsData[i]);

    }

}

app.listen(3000)
app.get('/ufo', (req, res) => {
    console.log(req);
    res.send('req');
    
})
