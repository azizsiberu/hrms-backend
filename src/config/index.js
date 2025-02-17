// path: src/config/index.js
const db = require("./db");
const env = require("./env");
const logger = require("./logger");
const authConfig = require("./authConfig");
const awsConfig = require("./awsConfig");

module.exports = {
  db,
  env,
  logger,
  authConfig,
  awsConfig,
};
