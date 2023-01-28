const empresasModel = require('../models/empresasModel');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const getAll = async (_, response) => {
	try {
		const empresas = await empresasModel.getAll();
		return response.status(200).json(empresas);
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

const getEmpresa = async (request, response) => {
	const {cnpj} = request.params;
	try {
		const [empresa] = await empresasModel.getEmpresa(cnpj);
		return response.status(200).json(empresa);
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

const createEmpresa = async (request, response) => {
  try{
    await empresasModel.createEmpresa(request.body);

    const cnpjEmpresa = Object.values(request.body)[0]
    const token = jwt.sign({ cnpj: cnpjEmpresa}, authConfig.secret, {
      expiresIn: 86400,
    });
  
	  return response.status(200).json({"token": token});
  
  } catch (err) {
		return response.status(500).json(err.message);
	}
};

const deleteEmpresa = async (request, response) => {
	const {cnpj} = request.params;
	await empresasModel.deleteEmpresa(cnpj);
	return response.status(204).json();
};

const updateEmpresa = async (request, response) => {
	const {cnpj} = request.params;

	await empresasModel.updateEmpresa(cnpj, request.body);
	return response.status(204).json();
};

const loginEmpresa = async (request, response) => {
	const {email, password} = request.body;
	const empresa = await empresasModel.getEmailEmpresa(email);

	if(empresa.length === 0)
		return response.status(400).send({ error: 'Company not found' });
	
	if(password !== empresa[0].password)
		return response.status(400).send({ error: 'Invalid password' })
	
	const token = jwt.sign({ cnpj: empresa[0].cnpj}, authConfig.secret, {
		expiresIn: 86400,
	});
	
	return response.status(200).json({empresa, "token": token});
};

module.exports = {
	getAll,
	getEmpresa,
	createEmpresa,
	deleteEmpresa,
	updateEmpresa,
	loginEmpresa,
};
