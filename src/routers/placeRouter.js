const auth = require('../auth/auth');
const express = require('express');
const addPlaceService = require('../services/places/addPlaceService');
const router = new express.Router();

router.post('/place', auth, addPlaceService);

module.exports = router;