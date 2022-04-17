const connection = require('./connection');
const { ObjectId } = require('mongodb');

async function getQuotes() {
  return connection().then((db) =>
    db.collection('quotes').find().toArray());
}

async function createQuote(quote) {
  const data = await connection().then((db) => db.collection('quotes'));
  const newQuote = await data.insertOne(quote);
  return newQuote;
}

async function findQuote(id) {
  return connection().then((db) =>
    db.collection('quotes').findOne({ _id: ObjectId(id) }));
}

async function deleteQuote(id) {
  return connection().then((db) =>
    db.collection('quotes').deleteOne({ _id: ObjectId(id) }));
}

module.exports = {
  getQuotes,
  createQuote,
  findQuote,
  deleteQuote
}