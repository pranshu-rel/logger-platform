require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4000,
  KAFKA_BROKER: process.env.KAFKA_BROKER,
  KAFKA_LOG_TOPIC: process.env.KAFKA_LOG_TOPIC
};
