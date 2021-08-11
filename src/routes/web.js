const express = require('express');
const router = express.Router();
const path = require('path');


//Para nuestras rutas debemos considerar lo siguiente:
//Si ustedes quieren mostrar toda la informacion de lo que deseen: index
//Si desean mostrar el detalle de un producto: show
//Si desean actualizar un producto: edit
// Si desean crear un producto o usuario: create
//Si desean borrar un producto: delete

//Debo requerir nuestro controlador
const controllersWeb = require(path.resolve(__dirname, '..', 'controllers', 'controllersWeb'));
//Armo mis rutas
router.get('/', controllersWeb.index);
//router.get('/nosotros', controllersWeb.nosotros);
//router.get('/contacto', controllersWeb.contacto);
module.exports = router;