const connect = require('./connection.js');
const { ObjectId } = require('mongodb');

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
    db.collection('leads').findOne({ _id: ObjectId(id) }));
}

async function deleteLead(id) {
  return connect().then((db) =>
    db.collection('leads').deleteOne({ _id: ObjectId(id) }));
}

module.exports = {
  getLeads,
  createLead,
  findLead,
  deleteLead
}