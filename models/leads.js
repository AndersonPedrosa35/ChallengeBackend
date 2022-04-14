const connect = require('./connection.js');

export function getLeads() {
  return connect().then((db) =>
    db.collection('leads').find().toArray());
}