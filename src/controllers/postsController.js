const postsModel = require('../models/postsModel');
const interesseModel = require('../models/interesseModel');

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

const getPostsInteresse = async (request, response) => {
    const { cnpj } = request.params;
    try {
        const interesses = interesseModel.getInteressesByONG(cnpj);

        let posts = [];
        for (const interesse of interesses) {
            const { id_post, status_i } = interesse;
            const [post] = await postsModel.getPost(id_post);
            const { produto_id, descricao, cnpj_emp, data_inicio, status } = post;
            const post_interesse = JSON.stringify({ produto_id: produto_id, descricao: descricao, cnpj_emp: cnpj_emp, data_inicio: data_inicio, status: status, status_interesse: status_i});
            posts.push(post_interesse);
        }

        return response.status(200).json(posts);  
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
    getPostsInteresse,
    createPost,
    deletePost,
    updatePost,
};