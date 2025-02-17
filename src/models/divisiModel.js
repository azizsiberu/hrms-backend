// path: src/models/divisiModel.js
const pool = require("../config/db");

const getDivisiById = async (id) => {
  const query = "SELECT * FROM divisi WHERE id = $1";
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

module.exports = { getDivisiById };
