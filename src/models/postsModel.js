const db = require('./database');
const query = require('../util/query');

const getAll = async (filters) => {
    let q = 'SELECT * FROM post';
    q = query.where(q, filters);
    const posts = await db.exec(q);
    return posts.rows;
}

const getPost = async (id) => {
    const post = await db.exec('SELECT * FROM post WHERE id = $1', [id]);
    return post.rows;
}

const createPost = async (post) => {
    const dateUTC = new Date(Date.now()).toUTCString();
    const { produto_id, descricao, cnpj_emp } = post;

    const q = 'INSERT INTO post(produto_id, descricao, cnpj_emp, data_inicio, status) VALUES ($1, $2, $3, $4, $5)';
    await db.exec(q, [produto_id, descricao, cnpj_emp, dateUTC, 'aberto']);
}

const deletePost = async (id) => {
    await db.exec('DELETE FROM post WHERE id = $1', [id]);
}

const updatePost = async (id, post) => {
    const { produto_id, descricao, cnpj_emp } = post;

    const q = 'UPDATE post SET produto_id = $1, descricao = $2, cnpj_emp = $3, status = $4 WHERE id = $5';
    const v = [produto_id, descricao, cnpj_emp, 'aberto', id];
    await db.exec(q, v);
}

module.exports = {
    getAll,
    getPost,
    createPost,
    deletePost,
    updatePost,
};