const db = require('./database');

const getInteresse = async (id_post, ong) => {
    const { cnpj_ong } = ong;

    const interesse = await db.exec('SELECT * FROM interesse_post WHERE cnpj_ong = $1 AND id_post = $2', [cnpj_ong, id_post]);
    return interesse.rows;
};

const getInteresseByEmpresa = async (cnpj_emp) => {
    const interesses = await db.exec('SELECT i.cnpj_ong, i.id_post, i.data_interesse, i.status FROM interesse_post AS i INNER JOIN post AS p ON i.id_post=p.id WHERE p.cnpj_emp=$1', [cnpj_emp]);
    return interesses.rows;
};

const addInteresse = async (id_post, ong) => {
    const dateUTC = new Date(Date.now()).toUTCString();
    const { cnpj_ong } = ong;

    const q = 'INSERT INTO interesse_post(cnpj_ong, id_post, data_interesse, status) VALUES ($1, $2, $3)';
    await db.exec(q, [cnpj_ong, id_post, dateUTC, 'aberto']);
};

const removeInteresse = async (id_post, ong) => {
    const { cnpj_ong } = ong;
    await db.exec('DELETE FROM interesse_post WHERE cnpj_ong = $1 AND id_post = $2', [cnpj_ong, id_post]);
};

const aceitarInteresse = async (id_post, ong) => {
    const { cnpj_ong } = ong;
    const q = 'UPDATE interesse SET status = $1 WHERE cnpj_ong = $1 AND id_post = $2 VALUES ($1, $2, $3)';
    await db.exec(q, ['aceito', cnpj_ong, id_post]);
};

const rejeitarInteresse = async (id_post, ong) => {
    const { cnpj_ong } = ong;
    const q = 'UPDATE interesse SET status = $1 WHERE cnpj_ong = $1 AND id_post = $2 VALUES ($1, $2, $3)';
    await db.exec(q, ['rejeitado', cnpj_ong, id_post]);
};

module.exports = {
    getInteresse,
    getInteresseByEmpresa,
    addInteresse,
    removeInteresse,
    aceitarInteresse,
    rejeitarInteresse,
};