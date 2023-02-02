const favoritoModel = require('../models/favoritoModel');

const getFavorito = async (request, response) => {
    try {
		const { id } = request.params;
		const [favorito] = await favoritoModel.getFavorito(id, request.body);
		return response.status(204).json(favorito);       
    } catch (err) {
		return response.status(500).json(err.message);
    }
};

const getFavoritosByProduto = async (request, response) => {
    try {
		const { id } = request.params;
		const favoritos = await favoritoModel.getFavoritosByProduto(id);
		return response.status(204).json(favoritos);      
    } catch (err) {
		return response.status(500).json(err.message);
    }
};

const addFavorito = async (request, response) => {
	try {
		const { id } = request.params;
		await favoritoModel.addFavorito(id, request.body);
		return response.status(204).json();
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

const removeFavorito = async (request, response) => {
	try {
		const { id } = request.params;
		await favoritoModel.removeFavorito(id, request.body);
		return response.status(204).json();
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

module.exports = {
    getFavorito,
    getFavoritosByProduto,
    addFavorito,
	removeFavorito,
};