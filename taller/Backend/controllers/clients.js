const { model } = require('mongoose');
const Sequelize = require('sequelize');
//import clientesModel from '../models/clients';
const clientesModel = require(`../models/clients`);

//module.exports = (datosClientes) => {
//   const clienDatos = clientesModel
//     .findAll({
//       attibutes: [
//         'idCliente',
//         'apellido',
//         'nombre',
//         'domicilio',
//         'telefono',
//         'tipoDoc',
//         'fechaAlta',
//         'nroDoc',
//       ],
//     })
//     .then((clientes) => {
//       console.log(clientes);
//       console.log('estos fueron los clientes');
//     })
//     .catch((error) => {
//       console.log('Mi error:', error);
//     });
//};

const clientController = { getall: getall };
function getall(req, res) {
  res.json('holla andy clientes');
}

module.exports = clientController;
