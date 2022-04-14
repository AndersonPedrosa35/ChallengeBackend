const leadsService = require('../services/leads.service');

export function getLeads(res, req) {
  const leads = leadsService.getLeads();
  return res.status(200).json(leads);
}

export function createLead(req, res) {
  const leads = leadsService.createLead(req.body);
  if (leads.message) {
    return res.status(leads.statusCode).json(leads.message);
  }
  return res.status(201).json(leads);
}