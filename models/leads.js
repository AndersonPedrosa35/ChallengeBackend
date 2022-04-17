const connection = require('./connection.js');
const { ObjectId } = require('mongodb');

async function getLeads() {
  return connection().then((db) =>
    db.collection('leads').find().toArray());
}

async function createLead(lead) {
  return connection().then((db) =>
    db.collection('leads').insertOne(lead));
}

async function findLead(id) {
  return connection().then((db) =>
    db.collection('leads').findOne({ _id: ObjectId(id) }));
}

async function deleteLead(id) {
  return connection().then((db) =>
    db.collection('leads').deleteOne({ _id: ObjectId(id) }));
}

module.exports = {
  getLeads,
  createLead,
  findLead,
  deleteLead
}