const adminModel = require("../models/adminModel");

const getAll = async (_, response) => {
  try {
    const admin = await adminModel.getAll();
    return response.status(200).json(admin);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const getAdmin = async (request, response) => {
  const { email } = request.params;
  try {
    const [admin] = await adminModel.getAdmin(email);
    return response.status(200).json(admin);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const createAdmin = async (request, response) => {
  await adminModel.createAdmin(request.body);
  return response.status(201).json();
};

const deleteAdmin = async (request, response) => {
  const { email } = request.params;
  await adminModel.deleteAdmin(email);
  return response.status(204).json();
};

const updateAdmin = async (request, response) => {
  const { email } = request.params;

  await adminModel.updateAdmin(email, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  getAdmin,
  createAdmin,
  deleteAdmin,
  updateAdmin,
};
