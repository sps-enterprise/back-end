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
    const { id_produto, descricao, cnpj_emp } =  post;

    const q = 'INSERT INTO post(id, id_produto, descricao, cnpj_emp, data_inicio, status) VALUES ($1, $2, $3, $4, $5, $6)';
    await db.exec(q, [1, id_produto, descricao, cnpj_emp, dateUTC, 'aberto']);  //ver como gerar o id automaticamente
}

const deletePost = async (id) => {
    await db.exec('DELETE FROM post WHERE id = $1', [id]);
}

const updatePost = async (id, post) => {
    const dateUTC = new Date(Date.now()).toUTCString(); //considera que atualiza a data tb
    const { id_produto, descricao, cnpj_emp } =  post;

    const q = 'UPDATE post SET id_produto = $1, descricao = $2, cnpj_emp = $3, data_inicio = $4, status = $5 WHERE id = $6';
    const v = [id_produto, descricao, cnpj_emp, dateUTC, 'aberto', id]; //id não muda
    await db.exec(q, v);
}

const addInteresse = async (id_post, ong) => {
    const dateUTC = new Date(Date.now()).toUTCString();
    const { cnpj_ong } = ong;

    const q = 'INSERT INTO interesse_post(cnpj_ong, id_post, data_interesse) VALUES ($1, $2, $3)';
    await db.exec(q, [cnpj_ong, id_post, dateUTC]);
}

const removeInteresse = async (id_post, ong) => {
    const { cnpj_ong } = ong;
    await db.exec('DELETE FROM interesse_post WHERE cnpj_ong = $1 AND id_post = $2', [cnpj_ong, id_post]);
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