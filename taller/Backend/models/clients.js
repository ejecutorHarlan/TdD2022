const Sequelize = require('sequelize');
const database = require('../db/db');

const clientes = database.define('clientes', {
  idCliente: { type: Sequelize.STRING, primaryKey: true },
  apellido: Sequelize.STRING,
  nombre: Sequelize.STRING,
  domicilio: Sequelize.STRING,
  telefono: Sequelize.INTEGER,
  tipoDoc: Sequelize.STRING,
  fechaAlta: Sequelize.DATE,
  nroDoc: Sequelize.STRING,
  isDeleted: Sequelize.BOOLEAN,
  password: Sequelize.STRING,
});

module.exports = clientes;
