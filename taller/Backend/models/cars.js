const Sequelize = require('sequelize');
const database = require('../db/db');

const autos = database.define('automoviles', {
  patente: { type: Sequelize.STRING, primaryKey: true },
  marca: Sequelize.STRING,
  modelo: Sequelize.STRING,
  year: Sequelize.BIGINT,
  color: Sequelize.STRING,
  idCliente: Sequelize.INTEGER,
  isDeleted: Sequelize.BOOLEAN,
});

module.exports = autos;
