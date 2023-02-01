const db = require("./database");

const getAll = async () => {
  const empresas = await db.exec("SELECT * FROM empresa");
  return empresas.rows;
};

const getEmpresa = async (cnpj) => {
  const empresa = await db.exec("SELECT * FROM empresa WHERE cnpj = $1", [cnpj]);
  return empresa.rows;
};

const getEmailEmpresa = async (email) => {
  const q = "SELECT * FROM empresa WHERE email = $1";
  const r = await db.exec(q, [email]);
  return r.rows;
};

const createEmpresa = async (empresa) => {
  const { cnpj, nome, endereco, telefone, email, password, slogan, historia, missao, atividades } = empresa;
  const q = 
    "INSERT INTO empresa(cnpj, nome, endereco, telefone, email, password, slogan, historia, missao, atividades) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
  await db.exec(q, [cnpj, nome, endereco, telefone, email, password, slogan, historia, missao, atividades]);
};

const deleteEmpresa = async (cnpj) => {
  await db.exec("DELETE FROM empresa WHERE cnpj = $1", [cnpj]);
};

const updateEmpresa = async (cnpj, empresa) => {
  const { nome, endereco, telefone, email, password, slogan, historia, missao, atividades } = empresa;
  const q =
    "UPDATE empresa SET nome = $1, endereco = $2, telefone = $3, email = $4, password = $5, slogan = $6, historia = $7, missao = $8, atividades = $9 WHERE cnpj = $10";
  await db.exec(q, [nome, endereco, telefone, email, password, slogan, historia, missao, atividades, cnpj]);
};

module.exports = {
  getAll,
  getEmpresa,
  createEmpresa,
  deleteEmpresa,
  updateEmpresa,
  getEmailEmpresa,
};
