const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('app is running on port: ', port);
});

app.get('/calcquery/:num1/:num2', (req, res) => {
    let num1 = parseInt(req.params.num1, 10)
    let num2 = parseInt(req.params.num2, 10)
    let op = req.query.operation
    let result = 0

    console.log(op);

    if (typeof op !== 'string') {
        console.log('get operation');

        res.send(`
            <form action="/calcquery/${num1}/${num2}?operation=${op}" method="get">
                <label for="lname">Operation:</label>
                <input type="text" id="op" name="operation"><br><br>
                <input type="submit" value="Submit">
            </form>
        `)
    } else {
        switch (op) {
            case 'add':
                result = num1 + num2
                res.send('sum is: ' + result);
                break;
            case 'multiply':
                result = num1 * num2
                res.send('multiply is: ' + result);
                break;
            case 'subtract':
                result = num1 - num2
                res.send('subtract is: ' + result);
                break;
            case 'divide':
                result = num1 / num2
                res.send('divide is: ' + result);
                break;
            default:
                res.send('no valid operation');
                break;
        }
    }

});

app.get('/calc/:num1/:num2', (req, res) => {
    let num1 = parseInt(req.params.num1, 10)
    let num2 = parseInt(req.params.num2, 10)
    let sum = num1 + num2
    res.send('sum is: ' + sum);

})