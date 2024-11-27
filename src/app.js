const express = require('express');
const productRoutes = require('./interfaces/routes/productRoutes');
const catalogRoutes = require('./interfaces/routes/catalogRoutes');

const app = express();
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/catalog', catalogRoutes);

module.exports = app;
