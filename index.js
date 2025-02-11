const sequelize = require("../config/db");
const User = require("./user");

sequelize.sync({ alter: true })
  .then(() => console.log("Tables synchronized"))
  .catch((err) => console.error("Error syncing tables:", err));

module.exports = { User };
