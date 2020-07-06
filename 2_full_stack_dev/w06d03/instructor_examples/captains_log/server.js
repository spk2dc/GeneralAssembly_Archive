const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');

app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost:27017/captains_log', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use(express.urlencoded({ extended: false }));

const logsController = require('./controllers/logs.js');
app.use('/logs', logsController);

app.listen(3000, () => {
    console.log('listening');
});
