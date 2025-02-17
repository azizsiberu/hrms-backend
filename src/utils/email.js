// path: src/utils/email.js
const nodemailer = require("nodemailer");
require("dotenv").config();

/**
 * Kirim email ke user.
 * @param {string} to - Email tujuan.
 * @param {string} subject - Subjek email.
 * @param {string} text - Isi email dalam teks biasa.
 * @param {string} html - Isi email dalam format HTML.
 */
exports.sendEmail = async (to, subject, text, html) => {
  console.log(`📧 [DEBUG] Mengirim email ke ${to}...`);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"HRMS System" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("✅ [DEBUG] Email berhasil dikirim!");
  } catch (error) {
    console.error("❌ [ERROR] Gagal mengirim email:", error.message);
    throw new Error("Gagal mengirim email");
  }
};
