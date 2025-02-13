// src/config/env.js
require("dotenv").config();

const requiredEnv = [
  "DB_HOST",
  "DB_PORT",
  "DB_USER",
  "DB_PASSWORD",
  "DB_NAME",
  "JWT_SECRET",
];

requiredEnv.forEach((env) => {
  if (!process.env[env]) {
    throw new Error(
      `Variabel lingkungan yang diperlukan tidak ditemukan: ${env}`
    );
  }
});
