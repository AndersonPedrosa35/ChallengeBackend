const leadsModel = require('../models/leads.js');

export function getLeads(token) {
  if (token === '1234567') {
  return leadsModel.getLeads();
  } else {
    return { statusCode: 401, message: 'Unauthorized' };
  }
}