// path: src/utils/formatDate.js
const dayjs = require("dayjs");

/**
 * Format tanggal ke dalam format `DD/MM/YYYY`
 * @param {Date|string} date - Tanggal dalam bentuk `Date` atau string.
 * @returns {string} - Tanggal terformat.
 */
exports.formatDate = (date) => {
  return dayjs(date).format("DD/MM/YYYY");
};
