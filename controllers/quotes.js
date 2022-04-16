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

async function findQuote(req, res) {
  const quotes = await quotesService.findQuote(req.params.id);
  if (quotes.statusCode) {
    return res.status(quotes.statusCode).json(quotes.message);
  }
  return res.status(200).json(quotes);
}

async function deleteQuote(req, res) {
  const quotes = await quotesService.deleteQuote(req.params.id);
  if (quotes.statusCode) {
    return res.status(quotes.statusCode).json(quotes.message);
  }
  return res.status(200).json(quotes);
}

module.exports = {
  getQuotes,
  createQuote,
  findQuote,
  deleteQuote
}