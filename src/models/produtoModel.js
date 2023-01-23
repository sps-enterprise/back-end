const db = require('./database');

const getAll = async () => {
	const produtos = await db.exec('SELECT * FROM produto');
	return produtos.rows;
};

const getProduto = async id => {
	const produto = await db.exec('SELECT * FROM produto WHERE id = $1', [id]);
	return produto.rows;
};

const createProduto = async produto => {
	//neste caso, id do produto está vindo do front end
	//listaFavoritados é em uma outra tabela
	const q = 'INSERT INTO produto(id, nome, descricao, categoria, disponibilidade) VALUES ($1, $2, $3, $4, $5)';
	await db.exec(q, Object.values(produto));
};

const deleteProduto = async id => {
	await db.exec('DELETE FROM produto WHERE id = $1', [id]);
};

const updateProduto = async (id, produto) => {
	//neste caso, id do produto pode ser trocado
	//listaFavoritados é em uma outra tabela
	const q = 'UPDATE produto SET id = $1, nome = $2, descricao = $3, categoria = $4, disponibilidade = $5 WHERE id = $6';
	const v = [...Object.values(produto), id];
	await db.exec(q, v);
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
	getAll,
	getProduto,
	createProduto,
	deleteProduto,
	updateProduto,
	addFavorito,
	removeFavorito,
};
