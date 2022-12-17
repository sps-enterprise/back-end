const ongsModel = require('../models/ongsModel');

const getAll = async (_, response) => {
  try{
    const ongs = await ongsModel.getAll();
    return response.status(200).json(ongs);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const getONG = async (request, response) => {
  const { cnpj } = request.params;
  try{
    const [ong] = await ongsModel.getONG(cnpj);
    return response.status(200).json(ong);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const createONG = async (request, response) => {
  const createdONG = await ongsModel.createONG(request.body);
  return response.status(201).json();
};

const deleteONG = async (request, response) => {
  const { cnpj } = request.params;
  await ongsModel.deleteONG(cnpj);
  return response.status(204).json();
};

const updateONG = async (request, response) => {
  const { cnpj } = request.params;

  await ongsModel.updateONG(cnpj, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  getONG,
  createONG,
  deleteONG,
  updateONG,
};
