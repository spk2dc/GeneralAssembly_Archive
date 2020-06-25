const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('listening on 3000');

})

let sup = [{ name: "Superman", powers: ['flight', 'invulnerability', 'x-ray vision'] }, { name: 'Wonder Woman', powers: ['flight', 'invulnerability', 'x-ray vision'] }, { name: 'Black Panther', powers: ['flight', 'invulnerability', 'x-ray vision'] }]

let vil = [
    {
        name: "Lex Luthor",
        powers: ["super brain"]
    },
    {
        name: "Ares",
        powers: ["shape shifting", "teleporting"]
    },
    {
        name: "Killmonger",
        powers: ["ability to fit in Black Panther's suit", "internet agreement that he looks badass"]
    }
]

app.get('/superheroes', (req, res) => {

    res.send(sup)
})

app.get('/superheroes/:index', (req, res) => {

    res.send(`
    <h1>${sup[req.params.index].name}</h1>
    <ul>
        <li>${sup[req.params.index].powers[0]}</li>
        <li>${sup[req.params.index].powers[1]}</li>
        <li>${sup[req.params.index].powers[2]}</li>
    </ul>
    <h3>Villain: ${vil[req.params.index].name}</h3>
    `)
})

