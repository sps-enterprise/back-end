const interesseModel = require('../models/interesseModel');

const addInteresse = async (request, response) => {
    const { id } = request.params;

    try {
        await postsModel.addInteresse(id, request.body);
        //notificar empresa
        return response.status(204).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }    
}

const removeInteresse = async (request, response) => {
    const { id } = request.params;

    try {
        await postsModel.removeInteresse(id, request.body);
        //remover notificação?
        return response.status(204).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
}

module.exports = {
    addInteresse,
    removeInteresse,
};