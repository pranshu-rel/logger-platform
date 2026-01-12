const app = require("./app");
const config = require("./config");

app.listen(config.PORT, () => {
  console.log(`Logger service running on port ${config.PORT}`);
});
