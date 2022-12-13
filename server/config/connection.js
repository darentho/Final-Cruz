const Sequelize = require("sequelize");
require("dotenv").config({ path: "../.env" });

let sequelize;

sequelize = new Sequelize("employees_db", "root", "Firewind8282", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
