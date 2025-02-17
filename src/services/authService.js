// path: src/services/authService.js
const { jwt, hashPassword } = require("../utils"); // ✅ Menggunakan index.js dari utils/
const { findUserByEmail, createUser } = require("../models/userModel");

const registerUser = async (username, email, password) => {
  console.log(`🔍 [DEBUG] Registrasi user: ${email}`);

  const existingUser = await findUserByEmail(email);
  if (existingUser) throw new Error("Email sudah terdaftar");

  const hashedPassword = await hashPassword.hashPassword(password);
  return await createUser(username, email, hashedPassword);
};

const loginUser = async (email, password) => {
  console.log(`🔑 [DEBUG] Login attempt for email: ${email}`);

  const user = await findUserByEmail(email);
  if (!user) throw new Error("Email tidak ditemukan");

  const isMatch = await hashPassword.comparePassword(
    password,
    user.password_hash
  );
  if (!isMatch) throw new Error("Password salah");

  const token = jwt.generateToken(user.id, user.nama_role);
  return { user, token };
};

module.exports = { registerUser, loginUser };
