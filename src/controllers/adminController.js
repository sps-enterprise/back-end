const adminModel = require("../models/adminModel");
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

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
  try {
    await adminModel.createAdmin(request.body);
    const emailAdmin = Object.values(request.body)[0]
    const token = jwt.sign({ email: emailAdmin}, authConfig.secret, {
      expiresIn: 86400,
    });
    return response.status(200).json({"token": token});
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const deleteAdmin = async (request, response) => {
  try {
    const { email } = request.params;
    await adminModel.deleteAdmin(email);
    return response.status(204).json();
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const updateAdmin = async (request, response) => {
  try {
    const { email } = request.params;
    await adminModel.updateAdmin(email, request.body);
    return response.status(204).json();
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

const loginAdmin = async (request, response) => {
	const {email, password} = request.body;
  try {
	  const admin = await adminModel.getEmailAdmin(email);
  } catch (err) {
    return response.status(500).send(err.message);
  }

	if(admin.length === 0)
		return response.status(400).send({ error: 'Admin not found' });
	
	if(password !== admin[0].password)
		return response.status(400).send({ error: 'Invalid password' })
	
	const token = jwt.sign({ email: admin[0].email}, authConfig.secret, {
		expiresIn: 86400,
	});
	
	return response.status(200).json({admin, "token": token});
};

module.exports = {
  getAll,
  getAdmin,
  createAdmin,
  deleteAdmin,
  updateAdmin,
  loginAdmin
};
