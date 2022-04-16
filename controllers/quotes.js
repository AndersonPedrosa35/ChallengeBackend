const quotesService = require('../services/quotes');

async function getQuotes(req, res) {
  const quotes = await quotesService.getQuotes();
  return res.status(200).json(quotes);
}

async function createQuote(req, res) {
  const quotes = await quotesService.createQuote(req.body);
  if (quotes.statusCode) {
    return res.status(quotes.statusCode).json(quotes.message);
  }
  return res.status(201).json(quotes.ops);
}

module.exports = {
  getQuotes,
  createQuote
}