const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'mysql', // o 'postgres', 'sqlite', 'mssql'
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports = db;
