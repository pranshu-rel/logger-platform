const router = require("express").Router();
const logger = require("../logger");

router.post("/", async (req, res, next) => {
  try {
    // ✍️ Manual request log
    logger.logRequest(req, {
      message: "Create order API called",
      level: "info",
    });

    // Simulate business logic
    if (!req.body.itemId) {
      const err = new Error("itemId is required");
      err.statusCode = 400;
      throw err;
    }

    // Business event log
    logger.info("Order created", {
      orderId: "ORD-101",
      userId: req.body.userId,
    });

    res.status(201).json({ orderId: "ORD-101" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
