const db = require('./database');

const getNotificacoesByEmpresa = async (cnpj_emp) => {
    const notificacoes = await db.exec('SELECT * FROM notificacao_interesse WHERE cnpj_emp = $1', [cnpj_emp]);
    return notificacoes.rows;
};

const addNotificacao = async (notificacao) => {
    const dateUTC = new Date(Date.now()).toUTCString();
    const { cnpj_emp, cnpj_ong, id_post } = notificacao;

    const q = 'INSERT INTO notificacao_interesse(cnpj_emp, cnpj_ong, id_post, data, lida) VALUES ($1, $2, $3, $4, $5)';
    await db.exec(q, [cnpj_emp, cnpj_ong, id_post, dateUTC, false]);
};

const readNotificacao = async (id) => {
    await db.exec('UPDATE notificacao_interesse SET lida = $1 WHERE id = $2', [true, id]);
};

const removeNotificacao = async (id) => {
    await db.exec('DELETE FROM notificacao_interesse WHERE id = $1', [id]);
};

module.exports = {
    getNotificacoesByEmpresa,
    addNotificacao,
    readNotificacao,
    removeNotificacao,
};