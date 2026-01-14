const { createLogger } = require("@your-scope/kafka-logger");

const logger = createLogger({
  service: "order-service",
  brokers: ["localhost:9092"], // host machine access
  topic: "application-logs",
});

module.exports = logger;
