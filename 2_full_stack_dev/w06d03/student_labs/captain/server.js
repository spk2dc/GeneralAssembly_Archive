const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('listening');
});

mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});