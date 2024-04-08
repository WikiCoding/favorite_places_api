const express = require('express');
const router = new express.Router();
const registerService = require('../services/auth/registerService');
const loginService = require('../services/auth/loginService');
const logoutService = require('../services/auth/logoutService');

router.post('/register', registerService);
router.post('/login', loginService);
router.post('/logout', logoutService);

module.exports = router;