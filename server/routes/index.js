const express = require('express');
const router = express.Router();

let user = require('../controllers/user');
let {letLoggedIn, hasAuth} = require('../middleware/hasAuth.js');

router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', user.logout);
router.get('/logout', user.logout);