const express = require('express')
const app = express()
app.listen(3000)

/*


*/


app.get('/Homer', (req, res) => {
    res.send("Test the Homer route");
})

app.get('/Marge', (req, res) => {
    res.send("Test the Marge route");
})

app.get('/Bart', (req, res) => {
    res.send("Test the Bart route");
})

app.get('/Lisa', (req, res) => {
    res.send("Test the Lisa route");
})

app.get('/Maggie', (req, res) => {
    res.send("Test the Maggie route");
})

app.get('/Snowball-II', (req, res) => {
    res.send("Test the Snowball II route");
})

app.get('/SantasLittleHelper', (req, res) => {
    res.send("Test the Santa's Little Helper route");
})

app.get('/custom', (req, res) => {
    res.send(`
    <html>
        <body>
            <h1>Testing custom html!</h1>
        </body>
    </html>
    `)
})
