const leadsService = require('../services/leads.js');

async function getLeads(req, res) {
  const leads = await leadsService.getLeads();
  return res.status(200).json(leads);
}

async function createLead(req, res) {
  const leads = await leadsService.createLead(req.body);
  if (leads.statusCode) {
    return res.status(leads.statusCode).json(leads.message);
  }
  return res.status(201).json(leads);
}

async function findLead(req, res) {
  const leads = await leadsService.findLead(req.params.id);
  if (leads.statusCode) {
    return res.status(leads.statusCode).json(leads.message);
  }
  return res.status(200).json(leads);
}

async function deleteLead(req, res) {
  const leads = await leadsService.deleteLead(req.params.id);
  if (leads.statusCode) {
    return res.status(leads.statusCode).json(leads.message);
  }
  return res.status(200).json(leads);
}

module.exports = {
  getLeads,
  createLead,
  findLead,
  deleteLead
}