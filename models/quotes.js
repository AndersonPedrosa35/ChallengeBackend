const connection = require('./connection');

async function getQuotes() {
  return connection().then((db) =>
    db.collection('quotes').find().toArray());
}

async function createQuote(quote) {
  const data = await connection().then((db) => db.collection('quotes'));
  const newQuote = await data.insertOne(quote);
  return newQuote;
}

module.exports = {
  getQuotes,
  createQuote
}