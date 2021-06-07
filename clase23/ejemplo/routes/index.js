var express = require('express');
var router = express.Router();

const controlador = require('../controllers/controller');

const multer = require('multer');
const path = require('path');

const pepe = multer.diskStorage({
  destination: (req, file, cb) => {
    let rutaDirectorio = 'public/images/cualquiernombre';
    cb(null, rutaDirectorio);
  },
  filename: (req, file, cb) => {
    let nombreArchivo = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, nombreArchivo);
  }
});

const upload = multer({
  storage: pepe
});

router.get('/', controlador.index);
router.post('/multerPost', upload.single('lala'), controlador.crear);

module.exports = router;
