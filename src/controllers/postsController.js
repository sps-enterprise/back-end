const postsModel = require('../models/postsModel');

const getAll = async (_, response) => {
    try {
        const posts = await postsModel.getAll();
        return response.status(200).json(posts);    
    } catch (err) {
        return response.status(500).json(err.message);
    }
}

const getPost = async (request, response) => {
    const { id } = request.params;
    try {
        const [post] = await postsModel.getPost(id);
        return response.status(200).json(post);    
    } catch (err) {
        return response.status(500).json(err.message);
    }
}

const createPost = async (request, response) => {
    const createdPost = await postsModel.createPost(request.body);
    return response.status(201).json();
}

const deletePost = async (request, response) => {
    const { id } = request.params;
    await postsModel.deletePost(id);
    return response.status(204).json();
}

const updatePost = async (request, response) => {
    const { id } = request.params;

    await postsModel.updatePost(id, request.body);
    return response.status(204).json();
}

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
    getAll,
    getPost,
    createPost,
    deletePost,
    updatePost,
    addInteresse,
    removeInteresse,
};