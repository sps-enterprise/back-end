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
	const empresa = await empresasModel.getEmpresa(Object.values(request.body)[0]);
    
	delete empresa[0].password;
	const token = jwt.sign({ empresa: empresa[0]}, authConfig.secret, {
      expiresIn: 86400,
    });
  
	  return response.status(200).json({"token": token});
  
  } catch (err) {
		return response.status(500).json(err.message);
	}
};

const deleteEmpresa = async (request, response) => {
	try {
		const {cnpj} = request.params;
		await empresasModel.deleteEmpresa(cnpj);
		return response.status(204).json();
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

const updateEmpresa = async (request, response) => {
	try {
		const {cnpj} = request.params;
		await empresasModel.updateEmpresa(cnpj, request.body);
		return response.status(204).json();
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

const loginEmpresa = async (request, response) => {
	const {cnpj, password} = request.body;
	try {
		const empresa = await empresasModel.getEmpresa(cnpj);

		if(empresa.length === 0)
		return response.status(400).send({ error: 'Company not found' });
	
		if(password !== empresa[0].password)
			return response.status(400).send({ error: 'Invalid password' })
		
		delete empresa[0].password;
		const token = jwt.sign({ empresa: empresa[0]}, authConfig.secret, {
			expiresIn: 86400,
		});
		
		return response.status(200).json({empresa, "token": token});
	} catch (err) {
		return response.status(500).json(err.message);
	}
	
	
};

module.exports = {
	getAll,
	getEmpresa,
	createEmpresa,
	deleteEmpresa,
	updateEmpresa,
	loginEmpresa,
};
