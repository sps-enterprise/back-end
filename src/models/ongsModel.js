const db = require("./database");

const getAll = async () => {
  const ongs = await db.exec("SELECT * FROM ong");
  return ongs.rows;
};

const getONG = async (cnpj) => {
  const ong = await db.exec("SELECT * FROM ong WHERE cnpj = $1", [cnpj]);
  return ong.rows;
};

const getEmailONG = async (email) => {
  const q = "SELECT * FROM ong WHERE email = $1";
  const r = await db.exec(q, [email]);
  return r.rows;
};

const createONG = async (ONG) => {
  const { cnpj, nome, endereco, telefone, email, password, slogan, historia, missao, atividades, image } = ONG;
  const q = 
    "INSERT INTO ong(cnpj, nome, endereco, telefone, email, password, slogan, historia, missao, atividades, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
  await db.exec(q, [cnpj, nome, endereco, telefone, email, password, slogan, historia, missao, atividades, image]);
};

const deleteONG = async (cnpj) => {
  await db.exec("DELETE FROM ong WHERE cnpj = $1", [cnpj]);
};

const updateONG = async (cnpj, ONG) => {
  const { nome, endereco, telefone, email, password, slogan, historia, missao, atividades, image } = ONG;
  const q =
    "UPDATE ong SET nome = $1, endereco = $2, telefone = $3, email = $4, password = $5, slogan = $6, historia = $7, missao = $8, atividades = $9, image = $10 WHERE cnpj = $11";
  await db.exec(q, [nome, endereco, telefone, email, password, slogan, historia, missao, atividades, image, cnpj]);
};

module.exports = {
  getAll,
  getONG,
  createONG,
  deleteONG,
  updateONG,
  getEmailONG,
};
