// path: test/testDb.js
const { db } = require("../config"); // ✅ Menggunakan index.js

const testConnection = async () => {
  try {
    const res = await db.query("SELECT NOW()");
    console.log("✅ Database connected, Server Time:", res.rows[0].now);
    process.exit(0);
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

testConnection();
