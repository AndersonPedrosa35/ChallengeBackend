const quotesModel = require('../models/quotes.js');

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
  else if (returnDate > departDate) {
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

export function getQuotes() {
  return quotesModel.getQuotes();
}

export function createQuote(quote) {
  const isValid = validateDateandPeople(quote);
  if (isValid !== true) {
    return { statusCode: 400, message: isValid.message };
  }
  const newQuote = {...quote, price: '2000,00'};
  console.log(newQuote);
  return quotesModel.createQuote(newQuote);
}