const db = require("./database");

const getAll = async () => {
  const admin = await db.exec("SELECT * FROM admin");
  return admin.rows;
};

const getAdmin = async (email) => {
  const admin = await db.exec("SELECT * FROM admin WHERE email = $2", [email]);
  return admin.rows;
};

const createAdmin = async (admin) => {
  const q = "INSERT INTO admin(nome, email, password) VALUES ($1, $2, $3)";
  await db.exec(q, Object.values(admin));
};

const deleteAdmin = async (email) => {
  await db.exec("DELETE FROM admin WHERE email = $2", [email]);
};

const updateAdmin = async (email, admin) => {
  const q =
    "UPDATE admin SET nome = $1,email = $2, password = $3 WHERE email = $7"; // alterei, mas ão sei se fez sentido
  const v = [...Object.values(admin), email];
  await db.exec(q, v);
};

module.exports = {
  getAll,
  getAdmin,
  createAdmin,
  deleteAdmin,
  updateAdmin,
};
