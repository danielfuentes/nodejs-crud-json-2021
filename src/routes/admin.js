const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const controllersAdmin = require(path.resolve(__dirname,'../controllers/controllersAdmin'));

//Como podemos indicar para subir el archivo nombre y donde guardarlo
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/motos'));
    },
    filename: function (req, file, cb) {
      cb(null, 'moto-'+Date.now()+path.extname(file.originalname))
    }
  })
   
  const upload = multer({ storage })

router.get('/administrar',  controllersAdmin.index);
router.get('/administrar/create', controllersAdmin.create);
router.post('/administrar/create', upload.single('imagen'), controllersAdmin.save);
router.get('/administrar/detail/:id', controllersAdmin.show);
router.get('/administrar/edit/:id', controllersAdmin.edit);
router.put('/administrar/edit/:id', upload.single('imagen'), controllersAdmin.update);
router.get('/administrar/delete/:id', controllersAdmin.destroy);

module.exports = router;