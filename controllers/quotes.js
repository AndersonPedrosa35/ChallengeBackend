const quotesService = require('../services/quotes.service');

export function getQuotes(res, req) {
  const quotes = quotesService.getQuotes();
  return res.status(200).json(quotes);
}

export function createQuote(req, res) {
  const quotes = quotesService.createQuote(req.body);
  if (quotes.message) {
    return res.status(quotes.statusCode).json(quotes.message);
  }
  return res.status(201).json(quotes);
}