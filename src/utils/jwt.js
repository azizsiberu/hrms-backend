// path: src/utils/jwt.js
const jwt = require("jsonwebtoken");
const env = require("../config/authConfig");

/**
 * Generate JWT token
 * @param {string} userId - ID pengguna
 * @param {string} role - Peran pengguna
 * @returns {string} - JWT token
 */
exports.generateToken = (userId, role) => {
  return jwt.sign({ userId, role }, env.secret, { expiresIn: env.expiresIn });
};

/**
 * Verifikasi JWT token
 * @param {string} token - Token JWT
 * @returns {object} - Data yang sudah didecode
 */
exports.verifyToken = (token) => {
  return jwt.verify(token, env.secret);
};
