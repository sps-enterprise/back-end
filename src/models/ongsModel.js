const db = require('./database');

const getAll = async () => {
  const [ongs] = await db.exec('SELECT * FROM ong');
  return ongs.rows;
};

const createONG = async (ONG) => {
  const q = 'INSERT INTO ong(cnpj, nome, endereco, telefone, email) VALUES ($1, $2, $3, $4, $5)';
  const [ongs] = await db.exec(q, Object.values(ONG));
  return ongs.rows;
};

const deleteONG = async (cnpj) => {
  const [ong] = await db.exec('DELETE FROM ong WHERE cnpj = $1', [cnpj]);
  return ong.rows;
};

const updateONG = async (cnpj, ONG) => {
  const q = 'UPDATE ong SET cnpj = $1, nome = $2, endereco = $3, telefone = $4, email = $5 WHERE cnpj = $6';
  var v = Object.values(ONG)
  v = [...v, cnpj];
  const [ong] = await db.exec(q, v);
  return ong.rows;
};

module.exports = {
  getAll,
  createONG,
  deleteONG,
  updateONG,
};
