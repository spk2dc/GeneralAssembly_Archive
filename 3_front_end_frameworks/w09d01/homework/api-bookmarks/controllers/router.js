const express = require('express')
const router = express.Router()

const Bookmark = require('../models/schema.js')

/**************************************************************
************************* CREATE ROUTE ************************

curl -X POST -H "Content-Type: application/json" -d '{"name":"test"}' http://localhost:3003/bookmark
**************************************************************/
router.post('/', async (req, res) => {
    Bookmark.create(req.body, (error, createdBookmark) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).send(createdBookmark) //  .json() will send proper headers in response so client knows it's json coming back
    })
})

/**************************************************************
************************* INDEX ROUTE ************************

curl http://localhost:3003/bookmark
**************************************************************/
router.get('/', (req, res) => {
    Bookmark.find({}, (err, foundBookmark) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundBookmark)
    })
})

// index route that only shows ids and names
//curl http://localhost:3003/bookmark/showids
router.get('/showids', (req, res) => {
    Bookmark.find({}, (err, foundBookmark) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }

        let arr = foundBookmark.map((val, i) => {
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

curl -X DELETE http://localhost:3003/bookmark/5f15c9728f578a27cd4dedad
**************************************************************/
router.delete('/:id', (req, res) => {
    Bookmark.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(deletedBookmark)
    })
})

/**************************************************************
************************* UPDATE ROUTE ************************

curl -X PUT -H "Content-Type: application/json" -d '{"name":"I updated this"}' http://localhost:3003/bookmark/5f15c9878f578a27cd4dedae
**************************************************************/
router.put('/:id', (req, res) => {
    Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBookmark) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedBookmark)
    })
})

module.exports = router