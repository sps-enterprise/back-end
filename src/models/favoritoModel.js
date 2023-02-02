const db = require('./database');

const getFavorito = async (id_produto, ong) => {
    const { cnpj_ong } = ong;
    const favorito = await db.exec('SELECT * FROM favoritos WHERE cnpj_ong = $1 AND id_produto = $2', [cnpj_ong, id_produto]);
    return favorito.rows;
};

const getFavoritosByProduto = async (id_produto) => {
    const favorito = await db.exec('SELECT * FROM favoritos WHERE id_produto = $1', [id_produto]);
    return favorito.rows;
};

const addFavorito = async (id_produto, ong) => {
	const dateUTC = new Date(Date.now()).toUTCString();
    const { cnpj_ong } = ong;

    const q = 'INSERT INTO favoritos(cnpj_ong, id_produto, data_favorito) VALUES ($1, $2, $3)';
    await db.exec(q, [cnpj_ong, id_produto, dateUTC]);	
};

const removeFavorito = async (id_produto, ong) => {
	const { cnpj_ong } = ong;
	await db.exec('DELETE FROM favoritos WHERE cnpj_ong = $1 AND id_produto = $2', [cnpj_ong, id_produto]);
};

module.exports = {
    getFavorito,
    getFavoritosByProduto,
    addFavorito,
    removeFavorito,
};