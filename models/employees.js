const connect = require('./connection.js');

async function getEmployees() {
  return connect().then((db) =>
    db.collection('employees').find().toArray());
}

async function createEmployee(employee) {
  return connect().then((db) =>
    db.collection('employees').insertOne(employee));
}

module.exports = {
  getEmployees,
  createEmployee
}