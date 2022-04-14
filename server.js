const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json('Hello World!');
});

app.listen(3001, () => {
  console.log('Estamos online');
});