const connect = require('./connection.js');

export function getQuotes() {
  return connect().then((db) =>
    db.collection('quotes').find().toArray());
}

export function createQuote(quote) {
  return connect().then((db) =>
    db.collection('quotes').insertOne(quote));
}