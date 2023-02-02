const produtoModel = require('../models/produtoModel');

const getAll = async (_, response) => {
	try {
		const produtos = await produtoModel.getAll();
		return response.status(200).json(produtos);
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

const getProduto = async (request, response) => {
	const {id} = request.params;
	try {
		const [produto] = await produtoModel.getProduto(id);
		return response.status(200).json(produto);
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

const createProduto = async (request, response) => {
	try {
		await produtoModel.createProduto(request.body);
		return response.status(201).json();
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

const deleteProduto = async (request, response) => {
	try {
		const {id} = request.params;
		await produtoModel.deleteProduto(id);
		return response.status(204).json();
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

const updateProduto = async (request, response) => {
	try {
		const {id} = request.params;
		await produtoModel.updateProduto(id, request.body);
		return response.status(204).json();
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

module.exports = {
	getAll,
	getProduto,
	createProduto,
	deleteProduto,
	updateProduto,
};
