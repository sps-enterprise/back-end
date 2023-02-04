const notificacaoModel = require('../models/notificacaoModel');

const getNotificacaoByEmpresa = async (request, response) => {
    const { cnpj_emp } = request.params;
    try {
        const [notificacoes] = await notificacaoModel.getAll(cnpj_emp);        
        return response.status(200).json(notificacoes);
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const createNotificacao = async (request, response) => {
    try {
        await notificacaoModel.createNotificacao(request.body);
        return response.status(201).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const readNotificacao = async (request, response) => {
    const { id } = request.params;
    try {
        await notificacaoModel.readNotificacao(id);
        return response.status(200).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const removeNotificacao = async (request, response) => {
    const { id } = request.params;
    try {
        await notificacaoModel.removeNotificacao(id);        
        return response.status(200).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

module.exports = {
    getNotificacaoByEmpresa,
    createNotificacao,
    readNotificacao,
    removeNotificacao,
};
