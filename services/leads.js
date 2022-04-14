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
}

export function getLeads() {
  return leadsModel.getLeads();
}

export function createLead(lead) {
  const isValid = validateBody(lead);
  if (isValid !== true) {
    return { statusCode: isValid.statusCode, message: isValid.message };
  }
  if (!lead.self) {
    lead = {...lead, self: 'https://cdn-icons-png.flaticon.com/512/74/74472.png'};
  }
  lead = {...lead, hours: new Date().toLocaleTimeString(), 
    message: 'Hey! I want to place my package'};
  console.log(lead);
  return leadsModel.createLead(lead);
}