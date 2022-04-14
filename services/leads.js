const leadsModel = require('../models/leads.js');

const validateBody = ({ name, email, phone }) => {
  if (name.length < 4) {
    return { statusCode: 400, message: 'Name must be at least 4 characters' };
  }
  else if (!(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}(\.[a-z0-9]+)?$/.test(email))) {
    return { statusCode: 400, message: 'Invalid email' };
  }
  else if (phone.length !== 11 || typeof (phone) !== 'number') {
    return { statusCode: 400, message: 'Invalid phone number' };
  }
  return true;
  // {
//   id: 1,
//   name: 'Jane Smith',
//   email: 'jane.smith@any.com',
//   self: 'https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x',
//   hours: '13:40 PM',
//   phone: '123-456-7890',
//   message: 'Hey! I want to place my package'
// }
}

export function getLeads(token) {
  if (token !== '1234567') {
    return { statusCode: 401, message: 'Unauthorized' };
  } else {
    return leadsModel.getLeads();
  }
}

export function createLead(lead, token) {
  const isValid = validateBody(lead);
  if (token !== '1234567') {
    return { statusCode: 401, message: 'Unauthorized' };
  } else if (isValid !== true) {
    return { statusCode: isValid.statusCode, message: isValid.message };
  }
  return leadsModel.createLead(lead);
}