const db = require('./database');

const getNotificacoesByEmpresa = async (cnpj_emp) => {
    const notificacoes = await db.exec('SELECT * FROM notificacao_interesse WHERE cnpj_emp = $1', [cnpj_emp]);
    return notificacoes.rows;
};

const addNotificacaoInteresse = async (notificacao) => {
    const dateUTC = new Date(Date.now()).toUTCString();
    const { cnpj_emp, cnpj_ong, id_post } = notificacao;

    const q = 'INSERT INTO notificacao_interesse(cnpj_emp, cnpj_ong, id_post, data, lida) VALUES ($1, $2, $3, $4, $5)';
    await db.exec(q, [cnpj_emp, cnpj_ong, id_post, dateUTC, false]);
};

const readNotificacaoInteresse = async (id) => {
    await db.exec('UPDATE notificacao_interesse SET lida = $1 WHERE id = $2', [true, id]);
};

const removeNotificacaoInteresse = async (id) => {
    await db.exec('DELETE FROM notificacao_interesse WHERE id = $1', [id]);
};

const getNotificacoesByONG = async (cnpj_ong) => {
    const notificacoes = await db.exec('SELECT * FROM notificacao_disponibilidade WHERE cnpj_ong = $1', [cnpj_ong]);
    return notificacoes.rows;
};

const addNotificacaoDisponibilidade = async (notificacao) => {
    const dateUTC = new Date(Date.now()).toUTCString();
    const { cnpj_ong, id_post } = notificacao;

    const q = 'INSERT INTO notificacao_disponibilidade(cnpj_ong, id_post, data, lida) VALUES ($1, $2, $3, $4, $5)';
    await db.exec(q, [cnpj_ong, id_post, dateUTC, false]);
};

const readNotificacaoDisponibilidade = async (id) => {
    await db.exec('UPDATE notificacao_disponibilidade SET lida = $1 WHERE id = $2', [true, id]);
};

const removeNotificacaoDisponibilidade = async (id) => {
    await db.exec('DELETE FROM notificacao_disponibilidade WHERE id = $1', [id]);
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
};