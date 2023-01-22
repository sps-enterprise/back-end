const db = require('./database');

const getAll = async () => {
	const empresas = await db.exec('SELECT * FROM empresa');
	return empresas.rows;
};

const getEmpresa = async cnpj => {
	const empresa = await db.exec('SELECT * FROM empresa WHERE cnpj = $1', [cnpj]);
	return empresa.rows;
};

const createEmpresa = async empresa => {
	const q = 'INSERT INTO empresa(cnpj, nome, endereco, telefone, email, password) VALUES ($1, $2, $3, $4, $5, $6)';
	await db.exec(q, Object.values(empresa));
};

const deleteEmpresa = async cnpj => {
	await db.exec('DELETE FROM empresa WHERE cnpj = $1', [cnpj]);
};

const updateEmpresa = async (cnpj, empresa) => {
	const q = 'UPDATE empresa SET cnpj = $1, nome = $2, endereco = $3, telefone = $4, email = $5, password = $6 WHERE cnpj = $7';
	const v = [...Object.values(empresa), cnpj];
	await db.exec(q, v);
};

module.exports = {
	getAll,
	getEmpresa,
	createEmpresa,
	deleteEmpresa,
	updateEmpresa,
};
