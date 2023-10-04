const express = require('express')
const locationController = require('../controllers/location.controller')
const router = express.Router()

router.get('/', locationController.getLocations);
router.post('/create', locationController.createLocation);
module.exports = router 