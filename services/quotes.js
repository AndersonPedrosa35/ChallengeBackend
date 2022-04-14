const quotesModel = require('../models/quotes.js');

export function getQuotes(token) {
  if (token === '1234567') {
  return quotesModel.getQuotes();
  } else {
    return { statusCode: 401, message: 'Unauthorized' };
  }
}