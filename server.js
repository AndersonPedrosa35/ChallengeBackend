const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getEmployees, createEmployee } = require('./controllers/employees');
const { getQuotes, createQuote } = require('./controllers/quotes');
const { getLeads, createLead } = require('./controllers/leads');
const { validToken } = require('./middleware/validToken');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json('Hello World!');
});

app.get('/leads', validToken, getLeads)
  .post('/leads', validToken, createLead);

app.get('/employees', validToken, getEmployees)
  .post('/employees', validToken, createEmployee);

app.get('/quotes', validToken, getQuotes)
  .post('/quotes', validToken, createQuote);

app.listen(3001, () => {
  console.log('Estamos online');
});