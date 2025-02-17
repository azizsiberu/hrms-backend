// path: src/middleware/authMiddleware.js
const jwt = require("../utils/jwt");

module.exports = (req, res, next) => {
  console.log("🔍 [DEBUG] Middleware autentikasi dipanggil");

  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    console.error("❌ [ERROR] Token tidak ditemukan");
    return res.status(401).json({ message: "Akses ditolak!" });
  }

  try {
    const decoded = jwt.verifyToken(token);
    req.user = decoded;
    console.log("✅ [DEBUG] Token valid, user:", decoded);
    next();
  } catch (error) {
    console.error("❌ [ERROR] Token tidak valid");
    return res.status(403).json({ message: "Token tidak valid!" });
  }
};
