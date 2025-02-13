// src/config/logger.js
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(
    colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/app.log", level: "info" }),
    new transports.File({ filename: "logs/error.log", level: "error" }),
  ],
  exceptionHandlers: [new transports.File({ filename: "logs/exceptions.log" })],
});

module.exports = logger;
