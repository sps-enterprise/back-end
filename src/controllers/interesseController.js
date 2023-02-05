const interesseModel = require('../models/interesseModel');
const notificacaoModel = require('../models/notificacaoModel');
const postsModel = require('../models/postsModel');

const getInteresse = async (request, response) => {
    const { cnpj_ong, id_post } = request.query;
    try {
        const [interesse] = await interesseModel.getInteresse(cnpj_ong, id_post);        
        return response.status(200).json(interesse);
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const getInteresseByOng = async (request, response) => {
    const { cnpj_ong } = request.params;
    try {
        const interesses = await interesseModel.getInteresseByONG(cnpj_ong);        
        return response.status(200).json(interesses);
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const getInteresseByEmpresa = async (request, response) => {
    const { cnpj_emp } = request.params;
    try {
        const interesses = await interesseModel.getInteresseByEmpresa(cnpj_emp);        
        return response.status(200).json(interesses);
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const addInteresse = async (request, response) => {
    try {
        await interesseModel.createInteresse(request.body);
        return response.status(201).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }    
};

const removeInteresse = async (request, response) => {
    const { cnpj_ong, id_post } = request.query;
    try {
        await interesseModel.deleteInteresse(cnpj_ong, id_post);
        return response.status(201).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const aceitarInteresse = async (request, response) => {
    const { cnpj_ong, id_post } = request.query;
    try {
        await interesseModel.updateInteresse(cnpj_ong, id_post, 'aceito');
        return response.status(204).json();
    } catch (err) {
        return response.status(500).json(err.message);        
    }
};

const rejeitarInteresse = async (request, response) => {
    const { cnpj_ong, id_post } = request.query;
    try {
        await interesseModel.updateInteresse(cnpj_ong, id_post, 'negado');
        return response.status(204).json();
    } catch (err) {
        return response.status(500).json(err.message);        
    }
};

module.exports = {
    getInteresse,
    getInteresseByEmpresa,
    getInteresseByOng,
    addInteresse,
    removeInteresse,
    aceitarInteresse,
    rejeitarInteresse,
};
