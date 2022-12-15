const db = require('./database')

const getAll = async () => {
  const [ongs] = await db.exec('SELECT * FROM ong');
  return ongs.rows;
};

const createONG = async (ONG) => {
  return {};
};

const deleteONG = async (id) => {
  return {}; 
};

const updateONG = async (id, ONG) => {
  return {};
};

module.exports = {
  getAll,
  createONG,
  deleteONG,
  updateONG,
};
