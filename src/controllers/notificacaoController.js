const notificacaoModel = require('../models/notificacaoModel');

const getNotificacoesByEmpresa = async (request, response) => {
    const { cnpj } = request.params;
    try {
        const [notificacoes] = await notificacaoModel.getNotificacoesByEmpresa(cnpj);        
        return response.status(200).json(notificacoes);
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const addNotificacao = async (request, response) => {
    try {
        await notificacaoModel.addNotificacao(request.body);
        return response.status(200).json();
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
    getNotificacoesByEmpresa,
    addNotificacao,
    readNotificacao,
    removeNotificacao,
};