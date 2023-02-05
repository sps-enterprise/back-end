const db = require('./database');

const getInteresse = async (cnpj_ong, id_post) => {
    const interesse = await db.exec('SELECT * FROM interesse_post WHERE cnpj_ong = $1 AND id_post = $2', [cnpj_ong, id_post]);
    return interesse.rows;
};

const getInteresseByEmpresa = async (cnpj_emp) => {
    const interesses = await db.exec('SELECT * FROM interesse_post AS i JOIN post AS p ON i.id_post = p.id WHERE cnpj_emp = $1', [cnpj_emp]);
    return interesses.rows;
};

const getInteresseByONG = async (cnpj_ong) => {
    const interesses = await db.exec('SELECT * FROM interesse_post AS i JOIN post AS p ON i.id_post = p.id WHERE cnpj_ong = $1', [cnpj_ong]);
    return interesses.rows;
};

const createInteresse = async (cnpj_ong, id_post) => {
    const dateUTC = new Date(Date.now()).toUTCString();

    const q = 'INSERT INTO interesse_post(cnpj_ong, id_post, data_interesse) VALUES ($1, $2, $3)';
    await db.exec(q, [cnpj_ong, id_post, dateUTC]);
};

const deleteInteresse = async (cnpj_ong, id_post) => {
    await db.exec('DELETE FROM interesse_post WHERE cnpj_ong = $1 AND id_post = $2', [cnpj_ong, id_post]);
};

const updateInteresse = async (cnpj_ong, id_post, status) => {
    const dateUTC = new Date(Date.now()).toUTCString();

    const q = 'UPDATE interesse_post SET status_i = $1, data_interesse = $2 WHERE cnpj_ong = $2 AND id_post = $3 VALUES ($1, $2, $3)';
    await db.exec(q, [status, dateUTC, cnpj_ong, id_post]);
};

module.exports = {
    getInteresse,
    getInteresseByONG,
    getInteresseByEmpresa,
    createInteresse,
    deleteInteresse,
    updateInteresse,
};
