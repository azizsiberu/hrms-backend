// path: src/utils/response.js

/**
 * Format response sukses.
 * @param {Response} res - Object response dari Express.
 * @param {string} message - Pesan sukses.
 * @param {Object} data - Data yang dikirim dalam response.
 */
exports.success = (res, message, data = {}) => {
  return res.status(200).json({
    status: "success",
    message,
    data,
  });
};

/**
 * Format response error.
 * @param {Response} res - Object response dari Express.
 * @param {string} message - Pesan error.
 * @param {number} statusCode - Kode status HTTP.
 */
exports.error = (res, message, statusCode = 400) => {
  return res.status(statusCode).json({
    status: "error",
    message,
  });
};
