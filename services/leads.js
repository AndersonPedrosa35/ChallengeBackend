const leadsModel = require('../models/leads.js');
const { objectId } = require('mongodb');

const validateBody = ({ name, email, phone }) => {
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
  return true;
}

async function getLeads() {
  const leads = await leadsModel.getLeads();
  if (leads.length === 0) {
    return [];
  }
  return leads;
}

async function createLead(lead) {
  const isValid = validateBody(lead);
  if (isValid !== true) {
    return { statusCode: isValid.statusCode, message: isValid.message };
  }
  if (!lead.self) {
    lead = {...lead, self: 'https://cdn-icons-png.flaticon.com/512/74/74472.png'};
  }
  lead = {...lead, hours: new Date().toLocaleTimeString(), 
    message: 'Hey! I want to place my package'};
  return leadsModel.createLead(lead);
}

async function findLead(id) {
  if (id.length !== 24) {
    return { statusCode: 400, message: 'invalid Id' };
  }
  const lead = await leadsModel.findLead(id);
  if (lead === null) {
    return { statusCode: 404, message: 'Lead not found' };
  }
  return lead;
}

async function deleteLead(id) {
  if (id.length !== 24) {
    return { statusCode: 400, message: 'invalid Id' };
  }
  const findLead = await leadsModel.findLead(id);
  if (findLead === null) {
    return { statusCode: 404, message: 'Lead not found' };
  }
  return leadsModel.deleteLead(id);
}

module.exports = {
  getLeads,
  createLead,
  findLead,
  deleteLead
}