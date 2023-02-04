const notificacaoModel = require('../models/notificacaoModel');
const postsModel = require('../models/postsModel');
const favoritoModel = require('../models/favoritoModel');

const getNotificacoesByEmpresa = async (request, response) => {
    const { cnpj } = request.params;
    try {
        const [notificacoes] = await notificacaoModel.getNotificacoesByEmpresa(cnpj);        
        return response.status(200).json(notificacoes);
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const addNotificacaoInteresse = async (request, response) => {
    try {
        await notificacaoModel.addNotificacaoInteresse(request.body);
        return response.status(200).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const readNotificacaoInteresse = async (request, response) => {
    const { id } = request.params;
    try {
        await notificacaoModel.readNotificacaoInteresse(id);
        return response.status(200).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const removeNotificacaoInteresse = async (request, response) => {
    const { id } = request.params;
    try {
        await notificacaoModel.removeNotificacaoInteresse(id);        
        return response.status(200).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const getNotificacoesByONG = async (request, response) => {
    const { cnpj } = request.params;
    try {
        const [notificacoes] = await notificacaoModel.getNotificacoesByONG(cnpj);        
        return response.status(200).json(notificacoes);
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const addNotificacaoDisponibilidade = async (request, response) => {
    try {
        await notificacaoModel.addNotificacaoDisponibilidade(request.body);
        return response.status(200).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const readNotificacaoDisponibilidade = async (request, response) => {
    const { id } = request.params;
    try {
        await notificacaoModel.readNotificacaoDisponibilidade(id);
        return response.status(200).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const removeNotificacaoDisponibilidade = async (request, response) => {
    const { id } = request.params;
    try {
        await notificacaoModel.removeNotificacaoDisponibilidade(id);        
        return response.status(200).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

const notificarONGsDisponibilidade = async (request, response) => {
    const { id } = request.params; //id do post
    try {
        const [post] = await postsModel.getPost(id);
        const { produto_id } = post;

        const favoritos = favoritoModel.getFavoritosByProduto(produto_id);

        for (const favorito of favoritos) {
            const { cnpj_ong } = favorito;
            notificacao = JSON.stringify({ cnpj_ong: cnpj_ong, id_post: id});
            await notificacaoModel.addNotificacaoDisponibilidade(notificacao);
        }

        return response.status(200).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
};

module.exports = {
    getNotificacoesByEmpresa,
    addNotificacaoInteresse,
    readNotificacaoInteresse,
    removeNotificacaoInteresse,
    getNotificacoesByONG,
    addNotificacaoDisponibilidade,
    readNotificacaoDisponibilidade,
    removeNotificacaoDisponibilidade,
    notificarONGsDisponibilidade,
};