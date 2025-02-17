// path: src/models/userModel.js
const pool = require("../config/db");

const findUserByEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email = $1";
  const { rows } = await pool.query(query, [email]);
  return rows[0];
};

const createUser = async (username, email, passwordHash) => {
  const query = `
    INSERT INTO users (username, email, password_hash, created_at, updated_at) 
    VALUES ($1, $2, $3, NOW(), NOW()) RETURNING id, username, email;
  `;
  const { rows } = await pool.query(query, [username, email, passwordHash]);
  return rows[0];
};

module.exports = { findUserByEmail, createUser };
