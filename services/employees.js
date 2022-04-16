const employeesModel = require('../models/employees.js');

const arrayStatus = [ 'available', 'busy'];

const validateBody = ({ name, email, phone, job, status }) => {
  const numberPhone = parseFloat(phone);
  if (name.length < 4) {
    return { statusCode: 400, message: 'Name must be at least 4 characters' };
  }
  else if (!(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}(\.[a-z0-9]+)?$/.test(email))) {
    return { statusCode: 400, message: 'Invalid email' };
  }
  else if (phone.length !== 11 || typeof (numberPhone) !== 'number') {
    return { statusCode: 400, message: 'Invalid phone number' };
  }
  else if (job.length < 4) {
    return { statusCode: 400, message: 'Job must be at least 4 characters' };
  }
  else if (arrayStatus.includes(status) === false){
    return { statusCode: 400, message: 'Invalid status' };
  }
  return true;
}

async function getEmployees() {
  const employees = await employeesModel.getEmployees();
  if (employees.length === 0) {
    return [];
  }
  return employees;
}

async function createEmployee(employee) {
  const isValid = validateBody(employee);
  if (isValid !== true) {
    return { statusCode: isValid.statusCode, message: isValid.message };
  }
  else if (!employee.self) {
    employee = {...employee, self: 'https://cdn-icons-png.flaticon.com/512/74/74472.png'};
  }
  return employeesModel.createEmployee(employee);
}

async function findEmployee(id){
  if (id.length !== 24) {
    return { statusCode: 400, message: 'invalid Id' };
  }
  const employee = await employeesModel.findEmployee(id);
  if (employee === null) {
    return { statusCode: 404, message: 'Employee not found' };
  }
  return employee;
}

async function deleteEmployee(id){
  if (id.length !== 24) {
    return { statusCode: 400, message: 'invalid Id' };
  }
  const findEmployee = await employeesModel.findEmployee(id);
  if (findEmployee === null) {
    return { statusCode: 404, message: 'Employee not found' };
  }
  return employeesModel.deleteEmployee(id);
}

module.exports = {
  getEmployees,
  createEmployee,
  findEmployee,
  deleteEmployee
}