const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getEmployees } = require('./controllers/employees');
const { getQuotes } = require('./controllers/quotes');
const { getLeads } = require('./controllers/leads');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json('Hello World!');
});

app.get('/leads', getLeads).post('/leads', createLead);
// {
//   id: 1,
//   name: 'Jane Smith',
//   email: 'jane.smith@any.com',
//   self: 'https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x',
//   hours: '13:40 PM',
//   phone: '123-456-7890',
//   message: 'Hey! I want to place my package'
// }

app.get('/employees', getEmployees).post('/employees', createEmployee);
// {
//   id: 1,
//   name: 'Josh Abdadacasas',
//   email: 'josh.abdadacasas@any.com',
//   self: 'https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x',
//   phone: "123-456-7890",
//   job: "Customer service",
//   status: "available"
// }

app.get('/quotes', getQuotes).post('/quotes', createQuote);
// {
//   id: 1,
//   from: 'Chicago',
//   destination: 'New York',
//   departDate: '1',
//   returnDate: '1',
//   people: '1',
//   transportation: 'airplane',
//   name: 'Doe John',
//   price: '2000,00'
// }

app.post('/quotes', (req, res) => {
  console.log(req.headers.authorization);
  res.status(201).send('OK');
});

app.listen(3001, () => {
  console.log('Estamos online');
});