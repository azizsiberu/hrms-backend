// src/config/db.js
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSL === "true", // Menggunakan SSL jika diatur ke 'true'
});

pool.on("connect", () => {
  console.log("Terhubung ke database PostgreSQL");
});

pool.on("error", (err) => {
  console.error("Error pada koneksi database:", err);
  process.exit(-1);
});

module.exports = pool;
