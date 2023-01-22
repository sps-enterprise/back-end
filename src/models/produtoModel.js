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
	//provavelmente lista de favoritados é uma outra tabela
	//neste caso, id do produto está vindo do front end
	const q = 'INSERT INTO produto(id, nome, descricao, categoria, disponibilidade, listaFavoritados) VALUES ($1, $2, $3, $4, $5, $6)';
	await db.exec(q, Object.values(produto));
};

const deleteProduto = async id => {
	await db.exec('DELETE FROM produto WHERE id = $1', [id]);
};

const updateProduto = async (id, produto) => {
	const q = 'UPDATE produto SET id = $1, nome = $2, descricao = $3, categoria = $4, disponibilidade = $5, listaFavoritados = $6 WHERE id = $7';
	const v = [...Object.values(produto), id];
	await db.exec(q, v);
};

module.exports = {
	getAll,
	getProduto,
	createProduto,
	deleteProduto,
	updateProduto,
};
