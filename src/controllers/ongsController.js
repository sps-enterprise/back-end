const ongsModel = require('../models/ongsModel');

const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

const getAll = async (_, response) => {
	try {
		const ongs = await ongsModel.getAll();
		return response.status(200).json(ongs);
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

const getONG = async (request, response) => {
	const {cnpj} = request.params;
	try {
		const [ong] = await ongsModel.getONG(cnpj);
		return response.status(200).json(ong);
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

const createONG = async (request, response) => {
	await ongsModel.createONG(request.body);

	const cnpjONG = Object.values(request.body)[0]
	const token = jwt.sign({ cnpj: cnpjONG}, authConfig.secret, {
		expiresIn: 86400,
	});

	return response.status(200).json({"token": token});
};

const deleteONG = async (request, response) => {
	const {cnpj} = request.params;
	await ongsModel.deleteONG(cnpj);
	return response.status(204).json();
};

const updateONG = async (request, response) => {
	const {cnpj} = request.params;

	await ongsModel.updateONG(cnpj, request.body);
	return response.status(204).json();
};

const loginONG = async (request, response) => {
	const {email, password} = request.body;
	const ong = await ongsModel.getEmailONG(email);

	if(ong.length === 0)
		return response.status(400).send({ error: 'ONG not found' });
	
	if(password !== ong[0].password)
		return response.status(400).send({ error: 'Invalid password' })
	
	const token = jwt.sign({ cnpj: ong[0].cnpj}, authConfig.secret, {
		expiresIn: 86400,
	});
	
	return response.status(200).json({ong, "token": token});
};

module.exports = {
	getAll,
	getONG,
	createONG,
	deleteONG,
	updateONG,
	loginONG
};
