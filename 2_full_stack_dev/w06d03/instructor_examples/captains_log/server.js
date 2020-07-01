const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/logs/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    res.send(req.body);
})

app.listen(3000, () => {
    console.log('listening');
});
