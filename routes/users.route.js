const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers')

router.get('/api/users', usersControllers.getAllUsers);






module.exports = router;

