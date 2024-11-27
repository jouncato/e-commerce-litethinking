const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// Endpoints CRUD para productos
router.post('/', productController.create);        // Crear producto
router.get('/', productController.getAll);         // Obtener todos los productos
router.get('/:id', productController.getById);     // Obtener producto por ID
router.put('/:id', productController.update);      // Actualizar producto
router.delete('/:id', productController.delete);   // Eliminar producto

module.exports = router;
