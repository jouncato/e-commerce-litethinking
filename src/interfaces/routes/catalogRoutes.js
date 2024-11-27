const express = require('express');
const catalogController = require('../controllers/catalogController');

const router = express.Router();

router.get('/', catalogController.getAll);        // Obtener todos los productos
router.get('/:id', catalogController.getById);    // Obtener producto por ID
module.exports = router;
