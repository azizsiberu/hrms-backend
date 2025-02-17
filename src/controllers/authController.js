// path: src/controllers/authController.js
const { registerUser, loginUser } = require("../services/authService");
const response = require("../utils/response");

exports.register = async (req, res) => {
  try {
    console.log("📨 [DEBUG] Menerima request registrasi");
    const { username, email, password } = req.body;
    const user = await registerUser(username, email, password);
    return response.success(res, "Registrasi berhasil", user);
  } catch (error) {
    console.error("❌ [ERROR] Registrasi gagal:", error.message);
    return response.error(res, error.message, 400);
  }
};

exports.login = async (req, res) => {
  try {
    console.log("📨 [DEBUG] Menerima request login");
    const { email, password } = req.body;
    const data = await loginUser(email, password);
    return response.success(res, "Login berhasil", data);
  } catch (error) {
    console.error("❌ [ERROR] Login gagal:", error.message);
    return response.error(res, error.message, 401);
  }
};
