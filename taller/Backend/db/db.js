const { modelNames } = require('mongoose');
const Sequelize = require('sequelize');

const database = new Sequelize('taller', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  define: {
    timestamps: false,
  },
});

module.exports = database;
