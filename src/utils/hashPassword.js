// path: src/utils/hashPassword.js
const bcrypt = require("bcryptjs");

/**
 * Hash password dengan bcrypt.
 * @param {string} password - Password yang akan di-hash.
 * @returns {Promise<string>} - Password yang sudah di-hash.
 */
exports.hashPassword = async (password) => {
  console.log("🔑 [DEBUG] Hashing password...");

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("✅ [DEBUG] Password berhasil di-hash");
    return hashedPassword;
  } catch (error) {
    console.error("❌ [ERROR] Password hashing gagal:", error.message);
    throw new Error("Password hashing gagal");
  }
};

/**
 * Bandingkan password dengan hash.
 * @param {string} password - Password input dari user.
 * @param {string} hash - Password yang sudah di-hash.
 * @returns {Promise<boolean>} - Hasil perbandingan.
 */
exports.comparePassword = async (password, hash) => {
  console.log("🔍 [DEBUG] Memeriksa kecocokan password...");

  try {
    const isMatch = await bcrypt.compare(password, hash);

    console.log(`✅ [DEBUG] Password cocok: ${isMatch}`);
    return isMatch;
  } catch (error) {
    console.error("❌ [ERROR] Password tidak cocok:", error.message);
    throw new Error("Password tidak cocok");
  }
};
