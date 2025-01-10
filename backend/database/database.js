// const { Pool } = require("pg");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("prs-db", "postgres", "Rohit@123", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

sequelize2 = new Sequelize("project", "postgres", "Rohit@123", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

sequelize.authenticate().then(() => {
  console.log("db Connected");
});

module.exports = { sequelize, sequelize2 };
