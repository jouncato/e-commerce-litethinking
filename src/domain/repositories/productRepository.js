const Product = require('../../infrastructure/db/models/ProductModel');

class ProductRepository {
    /**
     * Obtiene todos los productos de la base de datos.
     * @returns {Promise<Array>}
     */
    async getAllProducts() {
        try {
            const products = await Product.findAll();
            return products.map((product) => ({
                id: product.id,
                name: product.name,
                price: product.price,
                categoryId: product.categoryId,
                createdAt: product.createdAt,
                updatedAt: product.updatedAt,
            }));
        } catch (error) {
            console.error('Error fetching products:', error);
            throw new Error('Could not fetch products');
        }
    }
}

module.exports = ProductRepository;
