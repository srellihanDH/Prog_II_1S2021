var express = require('express');
var router = express.Router();

const eze = require('../controllers/controlador');

router.get('/', eze.index);
// http://locahost:3000/algunos/

router.get('/algunos', eze.index);
// http://locahost:3000/algunos/algunos

router.get('/pocos', eze.index);
// http://locahost:3000/algunos/pocos

router.get('/muchos', eze.index);
// http://locahost:3000/algunos/muchos

router.get('/cualquiera/:duki?', eze.cualquiera);
// http://localhost:3000/algunos/cualquiera/3
// http://localhost:3000/algunos/cualquiera/

module.exports = router;
