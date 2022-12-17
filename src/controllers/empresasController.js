const empresasModel = require('../models/empresasModel');

const getAll = async (_, response) => {
  try{
    const empresas = await empresasModel.getAll();
    return response.status(200).json(empresas);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const getEmpresa = async (request, response) => {
  const { cnpj } = request.params;
  try{
    const [empresa] = await empresasModel.getEmpresa(cnpj);
    return response.status(200).json(empresa);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const createEmpresa = async (request, response) => {
  const createdEmpresa = await empresasModel.createEmpresa(request.body);
  return response.status(201).json();
};

const deleteEmpresa = async (request, response) => {
  const { cnpj } = request.params;
  await empresasModel.deleteEmpresa(cnpj);
  return response.status(204).json();
};

const updateEmpresa = async (request, response) => {
  const { cnpj } = request.params;

  await empresasModel.updateEmpresa(cnpj, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  getEmpresa,
  createEmpresa,
  deleteEmpresa,
  updateEmpresa,
};
