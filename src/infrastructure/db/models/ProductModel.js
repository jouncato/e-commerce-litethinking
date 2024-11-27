const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Product = sequelize.define(
    'Product',
    {
        name: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.FLOAT, allowNull: false },
        categoryId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
        tableName: 'products',
        timestamps: true,
    }
);

module.exports = Product;