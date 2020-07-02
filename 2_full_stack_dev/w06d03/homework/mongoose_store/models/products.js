const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    img: String,
    price: { type: Number, capped: true, min: 0 },
    qty: { type: Number, capped: true, min: 0 }
},
    {
        timestamps: true
    })

const Product = mongoose.model('Product', productSchema)

module.exports = Product