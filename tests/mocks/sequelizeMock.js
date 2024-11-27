const SequelizeMock = require('sequelize-mock');

const dbMock = new SequelizeMock();

const ProductMock = dbMock.define('Product', {
    id: 1,
    name: 'Mock Product',
    price: 100.0,
    categoryId: 1,
});

module.exports = { dbMock, ProductMock };
