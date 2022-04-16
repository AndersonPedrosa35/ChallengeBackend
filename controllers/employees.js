const employeesService = require('../services/employees.js');

async function getEmployees(req, res) {
  const employees = await employeesService.getEmployees();
  return res.status(200).json(employees);
}

async function createEmployee(req, res) {
  const employees = await employeesService.createEmployee(req.body);
  if (employees.statusCode) {
    return res.status(employees.statusCode).json(employees.message);
  }
  return res.status(201).json(employees);
}

module.exports = {
  getEmployees,
  createEmployee
}