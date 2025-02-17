// path: src/models/roleModel.js
const pool = require("../config/db");

const getRoleById = async (id) => {
  const query = "SELECT * FROM roles WHERE id = $1";
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

module.exports = { getRoleById };
