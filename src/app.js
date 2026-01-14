const express = require("express");
const { createLogger } = require("@your-scope/kafka-logger");

const app = express();
app.use(express.json())

const logger = createLogger({
  service: "order-service",
  brokers: ["localhost:9092"],
  topic: "application-logs",
});

app.post("/logs", async (req, res) => {
  try {
    // await logger.info("Hello from npm logger", req.body);
     logger.logRequest(req, { message: "Create order request" });
     logger.

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Logger error:", error);
    res.status(500).json({ success: false });
  }
});

app.get("/health", (_, res) => {
  res.json({ status: "Logger service running" });
});

module.exports = app;
