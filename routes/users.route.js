const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');


router
    .get('/api/users', usersControllers.getAllUsers)
    .get('/api/users/:id', usersControllers.getOneUsers)
    .post('/api/users', usersControllers.createUsers)
    .patch('/api/users/:id', usersControllers.updateUsers)
    .delete('/api/users/:id', usersControllers.deleteUsers)






module.exports = router;

