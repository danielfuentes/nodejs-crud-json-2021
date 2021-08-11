const express = require('express');
const router = express.Router();
const path = require('path');

const controllersProducto = require(path.resolve(__dirname, '..', 'controllers', 'controllersProducto'));

router.get('/productos', controllersProducto.index);

module.exports = router;