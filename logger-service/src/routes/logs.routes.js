const express = require("express");
const logger = require("../logger");

const router = express.Router();

/**
 * POST /logs
 */
router.post("/", (req, res) => {
  const { level = "info", service, message, meta } = req.body;

  logger[level]({
    service,
    message,
    meta
  });

  res.status(200).json({ success: true });
});

module.exports = router;
