const employeesModel = require('../models/employees.js');

const validToken = '1234567';

export function getEmployees(token) {
  if (token === validToken) {
  return employeesModel.getEmployees();
  } else {
    return { statusCode: 401, message: 'Unauthorized' };
  }
}

export function createEmployee(employee, token) {
  if (token === validToken) {
  return employeesModel.createEmployee(employee);
  } else {

  }
}