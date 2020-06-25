const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('app is running on port: ', port);
});

app.get('/greeting/:name', (req, res) => {
    
    res.send(`Hello ${req.params.name}`)
})