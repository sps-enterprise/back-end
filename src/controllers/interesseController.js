const interesseModel = require('../models/interesseModel');

const getInteresse = async (request, response) => {
    const { id } = request.params;
    try {
        const [interesse] = await interesseModel.getInteresse(id, request.body);        
        return response.status(200).json(interesse);
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const getInteresseByEmpresa = async (request, response) => {
    const { cnpj } = request.params;
    try {
        const [interesses] = await interesseModel.getInteresseByEmpresa(cnpj);        
        return response.status(200).json(interesses);
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const addInteresse = async (request, response) => {
    const { id } = request.params;

    try {
        const [interesse] = await interesseModel.getInteresse(id, request.body);
        if (interesse.length == 0) {
            await interesseModel.addInteresse(id, request.body);
            //notificar empresa
        }
        return response.status(204).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }    
};

const removeInteresse = async (request, response) => {
    const { id } = request.params;

    try {
        await interesseModel.removeInteresse(id, request.body);
        //remover notificação?
        return response.status(204).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const aceitarInteresse = async (request, response) => {
    const { id } = request.params;

    try {
        await interesseModel.aceitarInteresse(id, request.body);
        return response.status(204).json();
    } catch (err) {
        return response.status(500).json(err.message);        
    }
};

const rejeitarInteresse = async (request, response) => {
    const { id } = request.params;

    try {
        await interesseModel.rejeitarInteresse(id, request.body);
        return response.status(204).json();
    } catch (err) {
        return response.status(500).json(err.message);        
    }
};

module.exports = {
    getInteresse,
    getInteresseByEmpresa,
    addInteresse,
    removeInteresse,
    aceitarInteresse,
    rejeitarInteresse,
};