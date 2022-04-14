const employeesService = require('../services/employees.service');

export function getEmployees(res, req) {
  const employees = employeesService.getEmployees();
  return res.status(200).json(employees);
}

export function createEmployee(req, res) {
  const employees = employeesService.createEmployee(req.body);
  if (employees.message) {
    return res.status(employees.statusCode).json(employees.message);
  }
  return res.status(201).json(employees);
}