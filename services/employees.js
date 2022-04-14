const employeesModel = require('../models/employees.js');

export const validToken = (token) => token === '1234567' ? true : false;

const arrayStatus = [ 'available', 'busy'];

const validateBody = ({ name, email, phone, job, status }) => {
  if (name.length < 4) {
    return { statusCode: 400, message: 'Name must be at least 4 characters' };
  }
  else if (!(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}(\.[a-z0-9]+)?$/.test(email))) {
    return { statusCode: 400, message: 'Invalid email' };
  }
  else if (phone.length !== 11 || typeof (phone) !== 'number') {
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

export function getEmployees() {
  return employeesModel.getEmployees();
}

export function createEmployee(employee) {
  const isValid = validateBody(employee);
  if (isValid !== true) {
    return { statusCode: isValid.statusCode, message: isValid.message };
  }
  else if (!employee.self) {
    employee = {...employee, self: 'https://cdn-icons-png.flaticon.com/512/74/74472.png'};
  }
  console.log(employee);
  return employeesModel.createEmployee(employee);
}
