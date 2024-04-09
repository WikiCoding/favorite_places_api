const auth = require('../auth/auth');
const express = require('express');
const addPlaceService = require('../services/places/addPlaceService');
const getPlacesService = require('../services/places/getPlacesService');
const router = new express.Router();

router.post('/place', auth, addPlaceService);

router.get('/place', auth, getPlacesService);

module.exports = router;