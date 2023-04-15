const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');


router
    .get('/api/users', usersControllers.getAllUsers)
    .post('/api/users', usersControllers.getOneUsers)
    .put('/api/users/:id', usersControllers.updateUsers)
    .delete('/api/users/:id', usersControllers.deleteUsers)






module.exports = router;

