const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Order = sequelize.define('Order', {
    totalAmount: DataTypes.FLOAT,
}, {});

module.exports = Order;
