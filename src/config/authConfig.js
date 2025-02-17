// path: src/config/authConfig.js
const env = require("./env");

module.exports = {
  secret: env.jwt.secret,
  expiresIn: env.jwt.expiresIn,
};
