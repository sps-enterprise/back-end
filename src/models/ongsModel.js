const db = require('./database');

const getAll = async () => {
	const ongs = await db.exec('SELECT * FROM ong');
	return ongs.rows;
};

const getONG = async cnpj => {
	const ong = await db.exec('SELECT * FROM ong WHERE cnpj = $1', [cnpj]);
	return ong.rows;
};

const createONG = async ONG => {
	const q = 'INSERT INTO ong(cnpj, nome, endereco, telefone, email, password) VALUES ($1, $2, $3, $4, $5, $6)';
	await db.exec(q, Object.values(ONG));
};

const deleteONG = async cnpj => {
	await db.exec('DELETE FROM ong WHERE cnpj = $1', [cnpj]);
};

const updateONG = async (cnpj, ONG) => {
	const q = 'UPDATE ong SET cnpj = $1, nome = $2, endereco = $3, telefone = $4, email = $5, password = $6 WHERE cnpj = $7';
	const v = [...Object.values(ONG), cnpj];
	await db.exec(q, v);
};

module.exports = {
	getAll,
	getONG,
	createONG,
	deleteONG,
	updateONG,
};
