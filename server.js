const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getEmployees, createEmployee, deleteEmployee, findEmployee } = require('./controllers/employees');
const { getQuotes, createQuote, findQuote, deleteQuote } = require('./controllers/quotes');
const { getLeads, createLead, findLead, deleteLead } = require('./controllers/leads');
const validToken = require('./middleware/validToken');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json('Hello World!');
});

app.get('/leads', validToken, getLeads)
  .post('/leads', validToken, createLead)
  .get('/leads/:id', validToken, findLead)
  .delete('/leads/:id', validToken, deleteLead);

app.get('/employees', validToken, getEmployees)
  .post('/employees', validToken, createEmployee)
  .get('/employees/:id', validToken, findEmployee)
  .delete('/employees/:id', validToken, deleteEmployee);

app.get('/quotes', validToken, getQuotes)
  .post('/quotes', validToken, createQuote)
  .get('/quotes/:id', validToken, findQuote)
  .delete('/quotes/:id', validToken, deleteQuote);

app.listen(3001, () => {
  console.log('Estamos online');
});