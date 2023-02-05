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
    const q = ` 
        SELECT e.cnpj as cnpj_emp, e.nome as nome_emp,
               p.id as id_post, p.quantidade, p.descricao,
               pd.id as produto_id, pd.nome as produto,
               i.status_i
        FROM interesse_post as i
            JOIN post as p ON i.id_post = p.id
            JOIN produto as pd ON p.produto_id = pd.id
            JOIN empresa as e ON p.cnpj_emp = e.cnpj
        WHERE i.cnpj_ong = $1
    `;
    const interesses = await db.exec(q, [cnpj_ong]);
    return interesses.rows;
};

const createInteresse = async (interesse) => {
    const dateUTC = new Date(Date.now()).toUTCString();
    const { cnpj_ong, id_post } = interesse;

    const q = 'INSERT INTO interesse_post(cnpj_ong, id_post, data_interesse) VALUES ($1, $2, $3)';
    await db.exec(q, [cnpj_ong, id_post, dateUTC]);
};

const deleteInteresse = async (cnpj_ong, id_post) => {
    await db.exec('DELETE FROM interesse_post WHERE cnpj_ong = $1 AND id_post = $2', [cnpj_ong, id_post]);
};

const updateInteresse = async (cnpj_ong, id_post, status) => {
    const dateUTC = new Date(Date.now()).toUTCString();

    const q = 'UPDATE interesse_post SET status_i = $1, data_interesse = $2 WHERE cnpj_ong = $3 AND id_post = $4';
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
