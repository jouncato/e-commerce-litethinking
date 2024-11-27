const CatalogProduct = require('../../infrastructure/db/models/CatalogProductModel');

const catalogRepository = {
    // Obtener todos los productos del catálogo (solo datos)
    async getAllCatalogProducts() {
        return await CatalogProduct.find({}).select('-_id').lean();
    },

    // Obtener un producto por su ID (solo datos)
    async getCatalogProductById(id) {
        return await CatalogProduct.findById(id).select('-_id').lean();
    },
};

module.exports = catalogRepository;
