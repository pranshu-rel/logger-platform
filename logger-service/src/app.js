const express = require("express");
const logsRoute = require("./routes/logs.routes");

const app = express();

app.use(express.json({ limit: "5mb" }));

app.use("/logs", logsRoute);

app.get("/health", (_, res) => {
  res.json({ status: "Logger service running" });
});

module.exports = app;
