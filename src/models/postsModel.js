const db = require('./database');

const getAll = async () => {
    const posts = await db.exec('SELECT * FROM post');
    return posts.rows;
}

const getPost = async (id) => {
    const post = await db.exec('SELECT * FROM post WHERE id = $1', [id]);
    return post.rows;
}

const createPost = async (post) => {
    const dateUTC = new Date(Date.now()).toUTCString();
    const { descricao, cnpj_emp } =  post;

    const q = 'INSERT INTO post(id, descricao, cnpj_emp, data_inicio, status) VALUES ($1, $2, $3, $4, $5)';
    await db.exec(q, [1, descricao, cnpj_emp, dateUTC, 'aberto']);  //ver como gerar o id automaticamente
}

const deletePost = async (id) => {
    await db.exec('DELETE FROM post WHERE id = $1', [id]);
}

const updatePost = async (id, post) => {
    const dateUTC = new Date(Date.now()).toUTCString(); //considera que atualiza a data tb
    const { descricao, cnpj_emp } =  post;

    const q = 'UPDATE post SET descricao = $1, cnpj_emp = $2, data_inicio = $3, status = $4 WHERE id = $5';
    const v = [descricao, cnpj_emp, dateUTC, 'aberto', id]; //id não muda
    await db.exec(q, v);
}

module.exports = {
    getAll,
    getPost,
    createPost,
    deletePost,
    updatePost,
};