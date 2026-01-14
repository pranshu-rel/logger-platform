const logger = require("../logger");

module.exports = (err, req, res, next) => {
  logger.error("Unhandled API error", {
    error: {
      message: err.message,
      stack: err.stack,
    },
    request: {
      method: req.method,
      url: req.originalUrl,
    },
  });

  res.status(err.statusCode || 500).json({
    error: err.message || "Internal Server Error",
  });
};
