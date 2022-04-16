const connect = require('./connection.js');

async function getLeads() {
  return connect().then((db) =>
    db.collection('leads').find().toArray());
}

async function createLead(lead) {
  return connect().then((db) =>
    db.collection('leads').insertOne(lead));
}

async function findLead(id) {
  return connect().then((db) =>
    db.collection('leads').findOne({ _id: id }));
}

module.exports = {
  getLeads,
  createLead
}