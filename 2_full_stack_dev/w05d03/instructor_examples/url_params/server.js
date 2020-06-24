const express = require('express');
const app = express();

const plants = [
    'Monstera Deliciosa', 'Corpse Flower', 
    'Elephant-Foot Yam', "Witches' Butter",];

app.get('/awesome', (req, res) => {
    res.send('<p>Plants are <strong>awesome!</strong></p>');
});

app.get('/:indexOfPlantsArray', (req, res) => {
    if (plants[req.params.indexOfPlantsArray]) {
        res.send(
            'Plant at index ' + req.params.indexOfPlantsArray + ': ' +
            plants[req.params.indexOfPlantsArray]);
    } else {
        res.send('Cannot find a plant at index ' + req.params.indexOfPlantsArray);
    }
});

app.get('/hello/:firstname/:lastname', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})