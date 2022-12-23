const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { json } = require('express');
const app = express();
const clientesModel = require('../models/clients');
const Sequelize = require('sequelize');
app.use(express.json());
app.use(cors());
const cors = require('cors');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// //Establecemos los prámetros de conexión
// const conexion = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'taller',
// });

// //Conexión a la database
// conexion.connect(function (error) {
//   if (error) {
//     throw error;
//   } else {
//     console.log('¡Conexión exitosa a la base de datos!');
//   }
// });

// app.get('/api/clientes', (req, res) => {
//   conexion.query('SELECT * FROM clientes', (error, filas) => {
//     if (error) {
//       //throw error;
//       console.log('error en la conexion', error);
//     } else {
//       res.send(filas);
//     }
//   });
// });

// module.exports = app;

const sequelize = new Sequelize('taller', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  define: {
    timestamps: false,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully a la base.');
  })
  .catch((error) => {
    console.log('Unable to connect to the databasesss:', error);
  });

const datos = clientesModel
  .findAll({
    attibutes: [
      'idCliente',
      'apellido',
      'nombre',
      'domicilio',
      'telefono',
      'tipoDoc',
      'fechaAlta',
      'nroDoc',
    ],
  })
  .then((clientes) => {
    console.log(clientes);
  })
  .catch((error) => {
    console.log('error:', error);
  });

module.exports = datos;
