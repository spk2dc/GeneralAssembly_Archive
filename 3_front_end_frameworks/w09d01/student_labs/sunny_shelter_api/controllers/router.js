const express = require('express')
const router = express.Router()

const Animal = require('../models/animal.js')

router.get('/', (req, res) => {
  res.send('index')
})

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

module.exports = router