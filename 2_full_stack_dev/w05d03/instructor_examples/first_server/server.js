const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("Oh hey! I got a request. Let me respond with something");
  res.send('hi there!');
});

app.listen(3000, () => {
  console.log('I am listening at port:3000');
});