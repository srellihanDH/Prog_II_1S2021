var express = require('express');
var router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.index);

router.get('/register', controller.registerForm);
router.post('/register', controller.registerCreateUser);

router.get('/login', controller.loginForm);
router.post('/login', controller.loginValidate);

router.get('/logout', controller.logout);

module.exports = router;
