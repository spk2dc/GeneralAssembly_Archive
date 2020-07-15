// ___________________
// Dependencies
// ___________________
// require express so we can use router
const express = require('express')
const products = express.Router()

// ___________________
// Models
// ___________________
// get access to the Product model
const Product = require('../models/products')

// ___________________
// See json Route
// ___________________
products.get('/json', async (req, res) => {
  try {
    const products = await Product.find()
    res.send(products)
  } catch (err) {
    res.send(err.message)
  }
})

// ___________________
// 7 Restful Routes
// ___________________
// Index  : GET    '/products'          1/7
// Show   : GET    '/products/:id'      2/7
// New    : GET    '/prodcuts/new'      3/7
// Create : POST   '/products'          4/7
// Edit   : GET    '/products/:id/edit' 5/7
// Update : PUT    '/products/:id'      6/7
// Delete : DELETE '/products/:id'      7/7

// Index  : GET    '/products'          1/7
products.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ name: 1 })
    if (!products.length) { res.send('waiting for database to be seeded <a href="/products/seed/newproducts">go here</a>') }
    res.render('./products/index.ejs', { products })
  } catch (err) {
    res.send(err.message)
  }
})

// New    : GET    '/products/new'      3/7
// Order matters! must be above /prodcuts/:id or else this route will never get hit
products.get('/new', (req, res) => {
  res.render('./products/new.ejs')
})

// Show   : GET    '/products/:id'      2/7
products.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.render('./products/show.ejs', { product: product })
  } catch (err) {
    res.send('That isn\'t a valid id! <a href="/products">Go back</a>')
  }
})

// Create : POST   '/products'          4/7
products.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.redirect('/products/' + product.id)
  } catch (err) {
    res.send(err.message)
  }
})

// Edit   : GET    '/products/:id/edit' 5/7
products.get('/:id/edit', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.render('./products/edit.ejs', { product: product })
  } catch (err) {
    res.send(err.message)
  }
})

// Update : PUT    '/products/:id'      6/7
products.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.redirect('/products/' + product.id)
  } catch (err) {
    res.send(err.message)
  }
})

// Delete : DELETE '/products/:id'      7/7
products.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id)
    res.redirect('/products')
  } catch (err) {
    res.send(err.message)
  }
})

// ___________________
// Buy Route - go here on click of buy button
// ___________________

products.put('/:id/buy', async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {$inc: { qty: -1 }})
    res.redirect('back')
  } catch (err) {
    res.send(err.message)
  }
})

// ___________________
// Seed Route - Vist ONCE to populate database
// ___________________
// note uses callbacks rather than async/await
// you can upgrade to async/await, if you like
products.get('/seed/newproducts', (req, res) => {
  const newProducts =
  [
    {
      name: 'Beans',
      description: 'A small pile of beans. Buy more beans for a big pile of beans.',
      img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
      price: 5,
      qty: 99
    },
    {
      name: 'Beautiful Bins',
      description: 'A stack of colorful bins for your beans and bones.',
      img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
      price: 7000,
      qty: 1
    },
    {
      name: 'Bones',
      description: 'It\'s just a bag of bones.',
      img: 'http://bluelips.com/prod_images_large/bones1.jpg',
      price: 25,
      qty: 0
    },
    {
      name: 'Water Rose',
      img: 'https://img00.deviantart.net/4cac/i/2013/115/2/1/red_water_rose_by_feferest-d62zxlw.jpg',
      description: 'Beautiful, ephemeral, assembly required',
      qty: 5,
      price: 1000000
    },
    {
      name: 'All Natural Organic Non-GM0 Pure 100% Natural Lime',
      img: 'http://i45.tinypic.com/2e3sbwz.jpg',
      description: 'Forget your fears of agricultural genetic engineering and take your taste buds back to the beginning of time with this authentic unaltered fruit',
      price: 17,
      qty: 72
    },
    {
      name: 'Mantis Shrimp (tamed)',
      img: 'http://otlibrary.com/wp-content/gallery/mantis-shrimp/mantis-shrimp.jpg',
      description: 'Sustainably raised, cage-free, docile mantis shrimp. Makes a for a cuddly companion as long as you never make direct eye contact! Notice: this item is gluten-free, should your relationship go south',
      price: 887,
      qty: 0
    },
    {
      name: 'Kohlrabi',
      img: 'http://www.thehealthjournals.com/wp-content/uploads/2014/02/kohlrabi-1-810x657.jpg',
      description: 'Get a jump on the next superfood craze. Kohlrabi\'s superiority is marked by its tricky to spell name. Text all your friends: You are going to live forever with the power of kholrabi',
      price: 6,
      qty: 913462
    },
    {
      name: 'Yogalates Fitness Machine 1000',
      img: 'https://s-media-cache-ak0.pinimg.com/564x/a8/4f/05/a84f051bf47e41382e4becd4a3d05214.jpg',
      description: 'Stop wasting your time doing one exercise at a time! With the YFM1000 you can do yoga and pilates at the same time! ',
      price: 3199,
      qty: 14
    },
    {
      name: 'Bell Jars',
      img: 'https://s-media-cache-ak0.pinimg.com/736x/0a/6f/b6/0a6fb62caa11cfdb68c7c12a2620c012.jpg',
      description: 'Capture the beauty of anything and don\'t let it get away! Formaldehyde sold separatey ',
      price: 49.99,
      qty: 49
    },
    {
      name: 'Portal to 5th Dimension',
      img: 'https://images-assets.nasa.gov/image/PIA20912/PIA20912~thumb.jpg',
      description: 'Bored of your neighborhood? Bored of your typical vacation? Go to the 5th dimension',
      price: 1,
      qty: 54
    }
  ]

  Product.create(newProducts, (err, product) => {
    if (err) { console.log(err) }
    console.log('SEED: NEW PRODUCTS CREATED!')
    res.redirect('/products')
  })
})

// ___________________
// ALTERNATE Seed Route - Vist ONCE to populate database
// ___________________
// note uses callbacks rather than async/await
// you can upgrade to async/await, if you like
const productSeeds = require('../models/seed.js')
products.get('/seed/newproducts/viaseedfile', (req, res) => {
  Product.insertMany(productSeeds, (err, products) => {
    if (err) { console.log(err) } else {
      res.send(products)
    }
  })
})

// ___________________
// Mistakes happen! Drop Database - Vist ONCE to drop your database. WARNING! YOU CANNOT UNDO THIS!
// Why is this a bad idea for production?
// ___________________
products.get('/dropdatabase/cannotundo/areyoursure/reallysure/okthen', (req, res) => {
  Product.collection.drop()
  res.send('You did it! You dropped the database!')
})

// ___________________
// Module Exports - access this file in server.js
// ___________________
// Export router AND require it in server.js Step 3/3
// Note all three need to be working in order to get server runnning
module.exports = products
