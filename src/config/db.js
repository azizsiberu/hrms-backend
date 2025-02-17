// path: src/config/db.js
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 10, // Maksimum koneksi simultan
  idleTimeoutMillis: 30000, // Waktu timeout koneksi idle
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("connect", () => {
  console.log("📡 Database connected");
});

pool.on("error", (err) => {
  console.error("❌ Database connection error:", err.message);
});

module.exports = pool;
