var moment = require('moment');
var MD5 = require('crypto-js/md5');
const { format } = require('util');
const turn = require('../models/turn');

const turnController = {
  createTurn: createTurn,
};

function createTurn(req, res) {
  turn
    .create({
      fechaTurno: req.body.fechaTurno,
      idClienteReparacion: req.body.idClienteReparacion,
    })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => {
      console.log(error);
    });
}

module.exports = turnController;
