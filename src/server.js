const app = require("./app");
const logger = require("./logger");

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});

// 🛑 Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received. Shutting down...");
  await logger.info("Service shutting down");
  server.close(() => process.exit(0));
});
