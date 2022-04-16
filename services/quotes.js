const quotesModel = require('../models/quotes');

const transportationList = [ 'bus', 'train', 'airplane', 'bicycle' ];

const validateDestineAndTransportation = ( name, from, destination, transportation ) => {
  if (name.length < 4) {
    return { statusCode: 400, message: 'Name must be at least 4 characters' };
  }
  else if (transportationList.includes(transportation) === false) {
    return { statusCode: 400, message: 'Invalid transportation' };
  }
  else if (from.length < 4 || from.length > 58) {
    return { statusCode: 400, message: 'Invalid From input' };
  }
  else if (destination.length < 4 || destination.length > 58) {
    return { statusCode: 400, message: 'Invalid destination input' };
  }
  return true
}

const validateDateandPeople = ({ name, from, destination, 
  departDate, returnDate, people, transportation }) => {
  const isValid = validateDestineAndTransportation(name, from, destination, transportation);
  if (departDate < Date.now()) {
    return { statusCode: 400, message: 'Invalid depart date' };
  }
  else if (Date.parse(returnDate) > Date.parse(departDate)) {
    return { statusCode: 400, message: 'Invalid return date' };
  }
  else if (people < 1 || people > 4) {
    return { statusCode: 400, message: 'Invalid number of people' };
  }
  else if ( isValid !== true) {
    return { statusCode: 400, message: isValid.message };
  }
  return true;
}

async function getQuotes() {
  const quotes = await quotesModel.getQuotes();
  if (quotes.length === 0) {
    return [];
  }
  return quotes;
}

async function createQuote(quote) {
  const isValid = validateDateandPeople(quote);
  if (isValid !== true) {
    return { statusCode: 400, message: isValid.message };
  }
  const newQuote = {...quote, price: '2000,00'};
  return quotesModel.createQuote(newQuote);
}

async function findQuote(id) {
  if (id.length !== 24) {
    return { statusCode: 400, message: 'invalid Id' };
  }
  const quote = await quotesModel.findQuote(id);
  if (quote === null) {
    return { statusCode: 404, message: 'Quote not found' };
  }
  return quote;
}

async function deleteQuote(id) {
  if (id.length !== 24) {
    return { statusCode: 400, message: 'invalid Id' };
  }
  const findQuote = await quotesModel.findQuote(id);
  if (findQuote === null) {
    return { statusCode: 404, message: 'Quote not found' };
  }
  return quotesModel.deleteQuote(id);
}

module.exports = {
  getQuotes,
  createQuote,
  findQuote,
  deleteQuote
}