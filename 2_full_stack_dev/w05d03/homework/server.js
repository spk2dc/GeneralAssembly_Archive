const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('app is running on port: ', port);
});

app.get('/greeting/:name', (req, res) => {

    res.send(`Hello ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tot = req.params.total
    let tip = req.params.tipPercentage
    let result = tip / 100 * tot
    res.send(`Tip to pay: $${result}`)
})