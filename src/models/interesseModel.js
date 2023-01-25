const db = require('./database');

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
    addInteresse,
    removeInteresse,
};