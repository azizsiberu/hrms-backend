// path: src/middleware/loggerMiddleware.js
module.exports = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);

  console.log("📨 [DEBUG] Request body:", req.body);
  next();
};
