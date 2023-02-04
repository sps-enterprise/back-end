const db = require('./database');

const getAll = async (cnpj_emp) => {
    const q = "SELECT cnpj_ong, produto_id, descricao FROM notificacao_interesse AS n JOIN post AS p ON n.post_id = p.id WHERE cnpj_emp = $1 AND open? = FALSE";

    const notificacoes = await db.exec(q, [cnpj_emp]);
    return notificacoes.rows;
};

const createNotificacao = async (notificacao) => {
    const dateUTC = new Date(Date.now()).toUTCString();
    const { cnpj_ong, id_post } = notificacao;

    const q = 'INSERT INTO notificacao_interesse(cnpj_ong, id_post, date, open?) VALUES ($1, $2, $3, $4)';
    await db.exec(q, [cnpj_ong, id_post, dateUTC, false]);
};

const readNotificacao = async (id) => {
    await db.exec('UPDATE notificacao_interesse SET open? = $1 WHERE id = $2', [true, id]);
};

const removeNotificacao = async (id) => {
    await db.exec('DELETE FROM notificacao_interesse WHERE id = $1', [id]);
};

const removeNotificacaoByInteresse = async (id_post, cnpj_ong) => {
    await db.exec('DELETE FROM notificacao_interesse WHERE cnpj_ong = $1 AND id_post = $2', [cnpj_ong, id_post]);
};

module.exports = {
    getAll,
    createNotificacao,
    readNotificacao,
    removeNotificacao,
    removeNotificacaoByInteresse,
};
