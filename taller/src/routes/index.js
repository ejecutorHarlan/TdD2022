const express = require('express');

const router = express.Router();
const clientsRoutes = require('./clients');

router.get('/', (req, res) => {
  res.send('Hello World!');
});
// router.get('/clientes', (req, res) => {
//   res.send('Hello World!');
// });

router.use('/api/clients', clientsRoutes);

module.exports = router;
