const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const isAdmin = require('../middlewares/isAdmin')

const rentalControllers = require('../controllers/rentalControllers')

//Endpoints
router.get('/getAll', rentalControllers.getAll)
router.post('/newrental', auth, rentalControllers.newrental)

module.exports = router