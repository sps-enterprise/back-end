const db = require('./database');

const getNotificacoes = async (cnpj) => {
    const notificacoes = await db.exec('SELECT * FROM notificacao WHERE cnpj = $1', [cnpj]);
    return notificacoes.rows;
};

const addNotificacao = async (cnpj, mensagem) => {
    const q = 'INSERT INTO notificacao(id, cnpj, mensagem, lida) VALUES ($1, $2, $3, $4)';
    await db.exec(q, [1, cnpj, mensagem, false]);   //ver como gerar o id automaticamente
};

const readNotificacao = async (id) => {
    await db.exec('UPDATE notificacao SET lida = $1 WHERE id = $2', [true, id]);
};

const removeNotificacao = async (id) => {
    await db.exec('DELETE FROM notificacao WHERE id = $1', [id]);
};

module.exports = {
    getNotificacoes,
    addNotificacao,
    readNotificacao,
    removeNotificacao,
};