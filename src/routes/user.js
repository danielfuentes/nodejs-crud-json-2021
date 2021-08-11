const express = require('express');
const router = express.Router();
const path = require('path');
const controllersUser = require(path.resolve(__dirname, '../controllers/ControllersUser'))


// Métodos en nuestros controladores: index - show - edit - delete 
router.get('/login', controllersUser.login);

router.get('/registro', controllersUser.registro);

module.exports = router;