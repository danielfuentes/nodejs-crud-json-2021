const path = require('path');

const controllersUser = {
    login: function(req,res){
        res.render(path.resolve(__dirname, '../views/usuarios/login'));
    },
    registro: function(req,res){
        res.render(path.resolve(__dirname, '../views/usuarios/registro'));
    },

}
module.exports = controllersUser;
