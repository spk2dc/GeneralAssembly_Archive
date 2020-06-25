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

app.get('/magic/:question', (req, res) => {
    let question = decodeURI(req.params.question)
    let responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

    let oneResp = responses[Math.floor(Math.random()*responses.length)]

    res.send(`Question: ${question}? <br>
    <h1>${oneResp}</h1>`)
})

///Hungry for more bonus problems
app.get('/', (req, res) => {

    res.send(`99 bottles of kombucha on the wall
    <a href="/98">take one down and pass it around</a>`)
})

app.get('/0', (req, res) => {

    res.send(`0 bottles of kombucha on the wall
    <a href="/">start over</a>`)
})

app.get('/:num', (req, res) => {

    res.send(`${req.params.num} bottles of kombucha on the wall
    <a href="/${req.params.num-1}">take one down and pass it around</a>`)
})

