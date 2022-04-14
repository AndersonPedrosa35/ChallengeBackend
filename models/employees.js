const connect = require('./connection.js');

export function getEmployees() {
  return connect().then((db) =>
    db.collection('employees').find().toArray());
}

export function createEmployee(employee) {
  return connect().then((db) =>
    db.collection('employees').insertOne(employee));
}