const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

router
    .get('/api/products', productsControllers.getAllProducts)
    .get('/api/products/:id', productsControllers.getOneProducts)
    .post('/api/products', productsControllers.getAllProducts)
    .put('/api/products/:id', productsControllers.updateProducts)
    .delete('/api/products/:id', productsControllers.deleteProducts)



module.exports = router;