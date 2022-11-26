const Sequelize = require('sequelize');

const sequelize = new Sequelize('taller', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  define: {
    timestamps: false,
  },
});

const clientesModel = sequelize.define('clientes', {
  idCliente: { type: Sequelize.STRING, primaryKey: true },
  apellido: Sequelize.STRING,
  nombre: Sequelize.STRING,
  domicilio: Sequelize.STRING,
  telefono: Sequelize.INTEGER,
  tipoDoc: Sequelize.STRING,
  fechaAlta: Sequelize.DATE,
  nroDoc: Sequelize.STRING,
});

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully a la base.');
  })
  .catch((error) => {
    console.log('Unable to connect to the databasex:', error);
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
    console.log('erroraa:', error);
  });

export default datos;
