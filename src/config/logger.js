// path: src/config/logger.js
const morgan = require("morgan");

const logger = morgan((tokens, req, res) => {
  return [
    `[${new Date().toISOString()}]`,
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    `Response Time: ${tokens["response-time"](req, res)} ms`,
  ].join(" ");
});

module.exports = logger;
