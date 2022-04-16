const connect = require('./connection.js');
const { ObjectId } = require('mongodb');

async function getEmployees() {
  return connect().then((db) =>
    db.collection('employees').find().toArray());
}

async function createEmployee(employee) {
  return connect().then((db) =>
    db.collection('employees').insertOne(employee));
}

async function findEmployee(id) {
  return connect().then((db) =>
    db.collection('employees').findOne({ _id: ObjectId(id) }));
}

async function deleteEmployee(id) {
  return connect().then((db) =>
    db.collection('employees').deleteOne({ _id: ObjectId(id) }));
}

module.exports = {
  getEmployees,
  createEmployee,
  findEmployee,
  deleteEmployee
}