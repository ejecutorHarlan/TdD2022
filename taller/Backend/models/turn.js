const Sequelize = require('sequelize');
const database = require('../db/db');

const turn = database.define('turnos', {
  idTurno: { type: Sequelize.INTEGER, primaryKey: true },
  fechaTurno: Sequelize.DATE,
  idClienteReparacion: Sequelize.STRING,
});

module.exports = turn;
