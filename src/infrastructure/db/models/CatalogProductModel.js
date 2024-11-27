const mongoose = require('mongoose');

const catalogProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
    },
    { collection: 'products' }
);

const CatalogProduct = mongoose.model('CatalogProduct', catalogProductSchema);

module.exports = CatalogProduct;
