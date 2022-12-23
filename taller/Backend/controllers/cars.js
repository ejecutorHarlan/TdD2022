const autos = require('../models/cars');

const carController = {
  getall: getall,
  getCarById: getCarById,
  deleteCar: deleteCar,
  updateCar: updateCar,
  createCar: createCar,
};

function createCar(req, res) {
  autos
    .create({
      patente: req.body.patente,
      marca: req.body.marca,
      modelo: req.body.modelo,
      year: req.body.year,
      color: req.body.color,
      idCliente: req.body.idCliente,
      isDeleted: false,
    })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => {
      console.log(error);
    });
}

function getall(req, res) {
  console.log(req.params.idCliente);
  const response = autos
    .findAll({ where: { isDeleted: false } })
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}

function getCarById(req, res) {
  autos
    .findOne({ where: { idCliente: req.params.id } })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => {
      console.log(error);
    });
}

function deleteCar(req, res) {
  const patenteToDelete = req.params.id;
  autos
    .update({ isDeleted: true }, { where: { patente: patenteToDelete } })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => {
      console.log(error);
    });
}

function updateCar(req, res) {
  const patenteToUpdate = req.params.id;
  autos
    .update(
      {
        patente: req.body.patente,
        marca: req.body.marca,
        modelo: req.body.modelo,
        year: req.body.year,
        color: req.body.color,
        idCliente: req.body.idCliente,
      },
      { where: { patente: patenteToUpdate } }
    )
    .then((data) => res.status(200).json({ data }))
    .catch((error) => {
      console.log(error);
    });
}

module.exports = carController;
