const sequelize = require("../config/connection");
const Employees = require("../models/employees");
const employeesSeedData = require("./employees.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Employees.bulkCreate(employeesSeedData);
  process.exit(0);
};

seedDatabase();
