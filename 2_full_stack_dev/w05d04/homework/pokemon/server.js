const express = require('express')
const app = express()
const port = 3000

let pokemon = require('./models/pokemon.js')

app.listen(port, () => {
    console.log(`listening on ${port}`);

})

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon',(req,res)=>{
    res.send(pokemon)
})