const db = require('./database');

const getInteresse = async (id_post, ong) => {
    const { cnpj_ong } = ong;

    const interesse = await db.exec('SELECT * FROM interesse_post WHERE cnpj_ong = $1 AND id_post = $2', [cnpj_ong, id_post]);
    return interesse.rows;
};

const getInteresseByEmpresa = async (cnpj_emp) => {
    const interesse = await db.exec('SELECT i.cnpj_ong, i.id_post, i.data_interesse FROM interesse_post AS i INNER JOIN post AS p ON i.id_post=p.id WHERE p.cnpj_emp=$1', [cnpj_emp]);
    return interesse.rows;
};

const addInteresse = async (id_post, ong) => {
    const dateUTC = new Date(Date.now()).toUTCString();
    const { cnpj_ong } = ong;

    const q = 'INSERT INTO interesse_post(cnpj_ong, id_post, data_interesse) VALUES ($1, $2, $3)';
    await db.exec(q, [cnpj_ong, id_post, dateUTC]);
};

const removeInteresse = async (id_post, ong) => {
    const { cnpj_ong } = ong;
    await db.exec('DELETE FROM interesse_post WHERE cnpj_ong = $1 AND id_post = $2', [cnpj_ong, id_post]);
};

module.exports = {
    getInteresse,
    getInteresseByEmpresa,
    addInteresse,
    removeInteresse,
};