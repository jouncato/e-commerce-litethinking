const catalogRepository = require('../../domain/repositories/catalogRepository');

const catalogController = {
    // Obtener todos los productos del catálogo
    async getAll(req, res) {
        try {
            const products = await catalogRepository.getAllCatalogProducts();
            res.status(200).json(products); // Retorna solo el payload
        } catch (error) {
            res.status(500).json({ message: 'Error fetching catalog products', error });
        }
    },

    // Obtener un producto del catálogo por su ID
    async getById(req, res) {
        try {
            const { id } = req.params;
            const product = await catalogRepository.getCatalogProductById(id);
            if (!product) return res.status(404).json({ message: 'Product not found' });
            res.status(200).json(product); // Retorna solo el payload
        } catch (error) {
            res.status(500).json({ message: 'Error fetching catalog product', error });
        }
    },
};

module.exports = catalogController;
