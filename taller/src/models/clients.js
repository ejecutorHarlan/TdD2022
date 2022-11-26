const Sequelize = require('sequelize');

export const clientesModel = sequelize.define('clientes', {
  idCliente: { type: Sequelize.STRING, primaryKey: true },
  apellido: Sequelize.STRING,
  nombre: Sequelize.STRING,
  domicilio: Sequelize.STRING,
  telefono: Sequelize.INTEGER,
  tipoDoc: Sequelize.STRING,
  fechaAlta: Sequelize.DATE,
  nroDoc: Sequelize.STRING,
});
