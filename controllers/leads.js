const leadsService = require('../services/leads.service');

export function getLeads(res, req) {
  const token = req.headers.authorization;
  const leads = leadsService.getLeads(token);
  if (leads.message) {
    return res.status(leads.statusCode).json(leads.message);
  }
  return res.status(200).json(leads);
}