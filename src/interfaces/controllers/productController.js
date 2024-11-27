const Product = require('../../infrastructure/db/models/ProductModel');

const productController = {
    // Crear un producto
    async create(req, res) {
        try {
            const { name, price, categoryId } = req.body;
            const product = await Product.create({ name, price, categoryId });
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error creating product', error });
        }
    },

    // Obtener todos los productos
    async getAll(req, res) {
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    },

    // Obtener un producto por ID
    async getById(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);
            if (!product) return res.status(404).json({ message: 'Product not found' });
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching product', error });
        }
    },

    // Actualizar un producto
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, price, categoryId } = req.body;
            const product = await Product.findByPk(id);

            if (!product) return res.status(404).json({ message: 'Product not found' });

            product.name = name || product.name;
            product.price = price || product.price;
            product.categoryId = categoryId || product.categoryId;

            await product.save();
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error updating product', error });
        }
    },

    // Eliminar un producto
    async delete(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);

            if (!product) return res.status(404).json({ message: 'Product not found' });

            await product.destroy();
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting product', error });
        }
    },
};

module.exports = productController;
