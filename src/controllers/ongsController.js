const ongsModel = require('../models/ongsModel');

const getAll = async (_request, response) => {
  try{
    const ongs = await ongsModel.getAll();
    return response.status(200).json(ongs);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const createONG = async (request, response) => {
  const createdONG = await ongsModel.createONG(request.body);
  return response.status(201).json(createdONG);
};

const deleteONG = async (request, response) => {
  const { id } = request.params;

  await ongsModel.deleteONG(id);
  return response.status(204).json();
};

const updateONG = async (request, response) => {
  const { id } = request.params;

  await ongsModel.updateONG(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  createONG,
  deleteONG,
  updateONG,
};
