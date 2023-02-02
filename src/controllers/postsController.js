const postsModel = require('../models/postsModel');

const getAll = async (request, response) => {
    try {
        const posts = await postsModel.getAll(request.query);
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
    try{
        await postsModel.createPost(request.body);
        return response.status(201).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
}

const deletePost = async (request, response) => {
    const { id } = request.params;
    try {
        await postsModel.deletePost(id);
        return response.status(204).json();
    } catch (err) {
        return response.status(500).json(err.message);
    }
}

const updatePost = async (request, response) => {
    const { id } = request.params;
    try{
        await postsModel.updatePost(id, request.body);
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
};