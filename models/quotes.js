const connect = require('./connection.js');

export function getQuotes() {
  return connect().then((db) =>
    db.collection('quotes').find().toArray());
}