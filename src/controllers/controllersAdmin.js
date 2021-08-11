const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        res.render(path.resolve(__dirname, '../views/admin/administrar'), {motos});
    },
    create: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        res.render(path.resolve(__dirname, '../views/admin/create'));
    },
    save: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        let ultimaMoto = motos.pop();
        motos.push(ultimaMoto);
        console.log();
        let nuevoProducto = {
            id: ultimaMoto.id +1,
            nombre : req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            descuento: req.body.descuento,
            imagen: req.file.filename
        }

        motos.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify(motos,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../database/motos.json'), nuevoProductoGuardar);
        res.redirect('/administrar');
    },
    show: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        let miMoto;
        motos.forEach(moto => {
            if(moto.id == req.params.id){
                miMoto = moto;
            }
        });
        res.render(path.resolve(__dirname, '../views/admin/detail'), {miMoto})

    },
    edit: (req,res)=>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        const modoId = req.params.id;
        let motoEditar = motos.find(moto=> moto.id == modoId);
        res.render(path.resolve(__dirname,'../views/admin/edit'), {motoEditar});
    },
    update: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        let motosUpdate = motos.map(moto =>{
            if(moto.id == req.body.id){
                return moto = req.body;
            }
            return moto;
        })
        let motoActualizar = JSON.stringify(motosUpdate,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../database/motos.json'),motoActualizar)
        res.redirect('/administrar');
    },
    destroy: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        const motoDeleteId = req.params.id;
        const motosFinal = motos.filter(moto => moto.id != motoDeleteId);
        let motosGuardar = JSON.stringify(motosFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../database/motos.json'),motosGuardar);
        res.redirect('/administrar');
    }








}