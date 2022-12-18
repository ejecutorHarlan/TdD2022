var moment = require('moment');
var MD5 = require('crypto-js/md5');

//const moment = require('moment/moment');
const { format } = require('util');
const clientes = require('../models/clients');

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

//const clientController = { getall: getall };

const clientController = {
  getall: getall,
  getClientById: getClientById,
  deleteClient: deleteClient,
  updateClient: updateClient,
  createClient: createClient,
};

function createClient(req, res) {
  const pass = MD5(req.body.password).toString();
  const today = new moment().format('YYYY-MM-DD HH:MM:ss');
  console.log('today', today);
  clientes
    .create({
      idCliente: req.body.idCliente,
      apellido: req.body.apellido,
      nombre: req.body.nombre,
      domicilio: req.body.domicilio,
      telefono: req.body.telefono,
      tipoDoc: req.body.tipoDoc,
      fechaAlta: today,
      nroDoc: req.body.nroDoc,
      isDeleted: false,
      password: pass,
    })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => {
      console.log(error);
    });
}

function getall(req, res) {
  console.log(req.params.idCliente);
  const response = clientes
    .findAll({ where: { isDeleted: false } })
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}

async function getClientById(req, res) {
  //console.log('llega al back', req.body);
  await clientes
    .findOne({ where: { idCliente: req.body.idCliente } })
    .then((data) => res.status(200).json({ data }))
    // .then((data) => res.json({ msj: 'client found', status: '200', data }))
    .then((data) => (getClientById = data))
    .catch((error) => {
      console.log(error);
    });
}

function deleteClient(req, res) {
  const idToDelete = req.params.id;
  clientes
    .update({ isDeleted: true }, { where: { idCliente: idToDelete } })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => {
      console.log(error);
    });
}

function updateClient(req, res) {
  const idToUpdate = req.params.id;
  clientes
    .update(
      {
        apellido: req.body.apellido,
        nombre: req.body.nombre,
        domicilio: req.body.domicilio,
        telefono: req.body.telefono,
        tipoDoc: req.body.tipoDoc,
        fechaAlta: req.body.fechaAlta,
        nroDoc: req.body.nroDoc,
      },
      { where: { idCliente: idToUpdate } }
    )
    .then((data) => res.status(200).json({ data }))
    .catch((error) => {
      console.log(error);
    });
}

module.exports = clientController;
