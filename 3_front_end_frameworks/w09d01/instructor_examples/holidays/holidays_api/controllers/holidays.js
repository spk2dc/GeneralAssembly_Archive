const express = require('express')
const holidays = express.Router()

const Holiday = require('../models/holidays.js')

// INDEX ROUTE
holidays.get('/', (req, res) => {
  Holiday.find({}, (err, foundHolidays) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundHolidays)
  })
})

// CREATE ROUTE
holidays.post('/', (req, res) => {
  Holiday.create(req.body, (error, createdHoliday) => {
    if (error) {
      res.status(400).json({ error: error.message })
    }
    res.status(200).send(createdHoliday) //.json() will send proper headers in response so client knows it's json coming back
  })
})

// UPDATE ROUTE
holidays.put('/:id', (req, res) => {
  Holiday.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedHoliday) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(updatedHoliday)
  })
})

// DELETE ROUTE
holidays.delete('/:id', (req, res) => {
  console.log(req.body)
  Holiday.findByIdAndRemove(req.params.id, (err, deletedHoliday) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(deletedHoliday)
  })
})

module.exports = holidays