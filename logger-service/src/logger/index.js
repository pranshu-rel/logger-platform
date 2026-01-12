const { publishToKafka } = require("../kafka/producer.js");

async function logToKafka(logObject) {
  const logMessage = JSON.stringify({
    ...logObject,
    timestamp: new Date().toISOString()
  });

  // fire-and-forget
  publishToKafka(logMessage).catch(() => {});
}

module.exports = {
  info: (data) => logToKafka({ level: "info", ...data }),
  error: (data) => logToKafka({ level: "error", ...data }),
  warn: (data) => logToKafka({ level: "warn", ...data })
};
