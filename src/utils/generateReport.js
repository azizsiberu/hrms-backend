// path: src/utils/generateReport.js
const fs = require("fs");
const path = require("path");

/**
 * Simpan laporan ke dalam file JSON.
 * @param {string} filename - Nama file laporan.
 * @param {Object} data - Data laporan.
 */
exports.generateJsonReport = (filename, data) => {
  const filePath = path.join(__dirname, "../reports", filename);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  console.log(`✅ [DEBUG] Laporan berhasil dibuat: ${filePath}`);
};
