// path: server.js
const app = require("./src/app");
const dotenv = require("dotenv");

dotenv.config();

if (!process.env.PORT) {
  console.error("❌ [ERROR] PORT belum diset dalam .env");
  process.exit(1); // Keluar dari aplikasi jika PORT tidak ditemukan
}

const PORT = process.env.PORT;

app
  .listen(PORT, () => {
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error("❌ [ERROR] Server failed to start:", err.message);
  });
