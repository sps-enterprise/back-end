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
    const { cnpj_ong, id_post } = request.params;
    try {
        await notificacaoModel.readNotificacao(cnpj_ong, id_post);
        return response.status(200).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const removeNotificacao = async (request, response) => {
    const { cnpj_ong, id_post } = request.params;
    try {
        await notificacaoModel.deleteNotificacao(cnpj_ong, id_post);        
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
