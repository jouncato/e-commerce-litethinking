const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
}, {});

module.exports = Category;
