const express = require('express');
const app = express();

app.get('/logs/new', (req, res) => {
    res.render('new.ejs');
});

app.listen(3000, () => {
    console.log('listening');
});
