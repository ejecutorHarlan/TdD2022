const express = require('express');
const Sequelize = require('sequelize');
const app = express();
let cors = require('cors');
const clientesModel = require('./models/clients.js');
const clientController = require('./controllers/clients.js');
const carController = require('./controllers/cars.js');
const database = require('./db/db');
app.use(express.json());

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

//app.use(cors());

database
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

app.post('/clientes', clientController.createClient);
app.get('/clientes', clientController.getall);
app.post('/aclientes', cors(corsOptions), clientController.getClientById);
app.delete('/clientes/:id', clientController.deleteClient);
app.patch('/clientes/:id', clientController.updateClient);

app.post('/car', carController.createCar);
app.get('/car', carController.getall);
app.get('/car/:id', carController.getCarById);
app.delete('/car/:id', carController.deleteCar);
app.patch('/car/:id', carController.updateCar);

// app.get('/clientes', (req, res) => {

// });
