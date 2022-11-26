const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const clientesModel = require('./models/clients.js');
// const datosClientes = require('./controllers/clients.js');
const clientController = require('./controllers/clients.js');

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

app.listen({ port: 3000 }, () => {
  console.log(`🚗💨 Server running on port 3000`);
  //console.log(clientesModel, datosClientes);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/clientes', clientController.getall);

// app.get('/clientes', (req, res) => {

// });
