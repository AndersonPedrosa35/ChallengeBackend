const employeesModel = require('../models/employees.js');

export function getEmployees(token) {
  if (token === '1234567') {
  return employeesModel.getEmployees();
  } else {
    return { statusCode: 401, message: 'Unauthorized' };
  }
}