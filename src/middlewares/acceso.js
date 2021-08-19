/* Esto fue lo primero que practicamos - para ver como funcionan los middleware

const path = require('path');
module.exports = (req,res,next) =>{
    let perfil = 1; // Para mi 9 es = Administrador
    if(perfil != 9){
        return res.render(path.resolve(__dirname, '../views/web/accesoDenegado'));    
    }else{
        next();
    }
}
*/

const fs = require('fs');
const path = require('path');
let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json')));
        
module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.usuario = false;
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario;
        return next();
    }else if(req.cookies.email){
        let usuario = archivoUsuarios.find(usuario => usuario.email == req.cookies.email)
        //return res.send(usuario);
        //delete usuario.password;
        req.session.usuario = usuario;
        res.locals.usuario = usuario;
        return next();
    }else{
        return next();
    }
}
