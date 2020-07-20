const express = require('express')
const router = express.Router()

const Animal = require('../models/animal.js')

/**************************************************************
************************* CREATE ROUTE ************************

curl -X POST -H "Content-Type: application/json" -d '{"name":"test"}' http://localhost:3003/shelter
**************************************************************/
router.post('/', async (req, res) => {
    Animal.create(req.body, (error, createdAnimal) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).send(createdAnimal) //  .json() will send proper headers in response so client knows it's json coming back
    })
})

/**************************************************************
************************* INDEX ROUTE ************************

curl http://localhost:3003/shelter
**************************************************************/
router.get('/', (req, res) => {
    Animal.find({}, (err, foundAnimal) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundAnimal)
    })
})

// index route that only shows ids and names
//curl http://localhost:3003/shelter/showids
router.get('/showids', (req, res) => {
    Animal.find({}, (err, foundAnimal) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }

        let arr = foundAnimal.map((val, i) => {
            let obj = {
                _id: val._id,
                name: val.name
            }
            return obj
        })
        res.status(200).json(arr)
    })
})

/**************************************************************
************************* DELETE ROUTE ************************

curl -X DELETE http://localhost:3003/shelter/5f15c9728f578a27cd4dedad
**************************************************************/
router.delete('/:id', (req, res) => {
    Animal.findByIdAndRemove(req.params.id, (err, deletedAnimal) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(deletedAnimal)
    })
})

/**************************************************************
************************* UPDATE ROUTE ************************

curl -X PUT -H "Content-Type: application/json" -d '{"name":"I updated this"}' http://localhost:3003/shelter/5f15c9878f578a27cd4dedae
**************************************************************/
router.put('/:id', (req, res) => {
    Animal.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedAnimal) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedAnimal)
    })
})

module.exports = router