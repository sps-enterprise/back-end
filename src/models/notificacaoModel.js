const db = require('./database');

const getAll = async (cnpj_emp) => {
    const q = "SELECT cnpj_ong, produto_id, descricao FROM interesse_post AS i JOIN post AS p ON i.id_post = p.id WHERE cnpj_emp = $1";

    const notificacoes = await db.exec(q, [cnpj_emp]);
    return notificacoes.rows;
};

const createNotificacao = async (notificacao) => {
    const dateUTC = new Date(Date.now()).toUTCString();
    const { cnpj_ong, id_post } = notificacao;

    const q = 'INSERT INTO interesse_post(cnpj_ong, id_post, data_interesse) VALUES ($1, $2, $3, $4)';
    await db.exec(q, [cnpj_ong, id_post, dateUTC]);
};

const readNotificacao = async (cnpj_ong, id_post) => {
    await db.exec('UPDATE interesse_post SET open = $1 WHERE cnpj_ong = $2 AND id_post = $3', [true, cnpj_ong, id_post]);
};

const removeNotificacao = async (cnpj_ong, id_post) => {
    await db.exec('DELETE FROM interesse_post WHERE cnpj_ong = $1 AND id_post = $2', [cnpj_ong, id_post]);
};

module.exports = {
    getAll,
    createNotificacao,
    readNotificacao,
    removeNotificacao,
};
