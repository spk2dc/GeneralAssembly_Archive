const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const router = express.Router();

router.use(express.urlencoded({ extended: true }))
router.use(methodOverride('_method'))

const Product = require('../models/products.js')
const { render } = require('ejs')

//ROUTES

//seed database
router.get('/products/seed', async (req, res) => {
    const newProducts =
        [
            {
                name: 'Beans',
                description: 'A small pile of beans. Buy more beans for a big pile of beans.',
                img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
                price: 5,
                qty: 99
            }, {
                name: 'Bones',
                description: 'It\'s just a bag of bones.',
                img: 'http://bluelips.com/prod_images_large/bones1.jpg',
                price: 25,
                qty: 0
            }, {
                name: 'Bins',
                description: 'A stack of colorful bins for your beans and bones.',
                img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
                price: 7000,
                qty: 1
            }
        ]

    try {
        const seedItems = await Product.create(newProducts)
        res.send(seedItems)
    } catch (err) {
        res.send(err.message)
    }
})

//index
router.get('/products', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('index.ejs', { data: allProducts })
    })
})

//new
router.get('/products/new', (req, res) => {
    // res.send('testing new page')
    res.render('new.ejs')
})

//create
router.post('/products', (req, res) => {
    Product.create(req.body, (err, newProduct) => {
        res.redirect('/products')
    })
})

//show
router.get('/products/:id', (req, res) => {
    // console.log(req.params.id);
    Product.findById(req.params.id, (err, oneProduct) => {
        res.render('show.ejs', { data: oneProduct })
    })
})

//edit
router.get('/products/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, oneProduct) => {
        res.render('edit.ejs', { data: oneProduct })
    })
})

//update
router.post('/products/:id', (req, res) => {
    console.log(req.body);
    // res.send('edit redirect to update route')
    Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        img: req.body.img,
        price: req.body.price,
        qty: req.body.qty,

    },
        {
            new: true
        },
        (err, oneProduct) => {
            res.redirect(`/products/${req.params.id}`)
        })
})

//delete all
router.get('/products/delete/all', (req, res) => {
    Product.deleteMany({}, (err, deletedProduct) => {
        res.redirect('/products')
    })
})

//delete one
router.delete('/products/:id/delete', (req, res) => {
    Product.deleteOne({ _id: req.params.id }, (err, deletedProduct) => {
        console.log(deletedProduct);
        res.redirect('/products')
    })
})

//buy
router.post('/products/:id/buy', (req, res) => {
    let buyQty = Number(req.body.qty) - 1
    console.log(req.body, `new buy value: ${buyQty}`);
    // res.send('edit redirect to update route')
    Product.findByIdAndUpdate(req.params.id, {
        qty: buyQty,
    },
        {
            new: true
        },
        (err, oneProduct) => {
            res.redirect(`/products/${req.params.id}`)
        })
})

module.exports = router;
