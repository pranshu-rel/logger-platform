const express = require("express");
const logger = require("./logger");
const ordersRoutes = require("./routes/orders.routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(express.json({ limit: "5mb" }));

// 🔥 Logs every request automatically
app.use(logger.requestMiddleware());

app.use("/orders", ordersRoutes);

// Health check
app.get("/health", (_, res) => {
  res.json({ status: "OK" });
});

// ❌ Central error handler
app.use(errorHandler);

module.exports = app;
