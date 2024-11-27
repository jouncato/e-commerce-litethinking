const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'E-commerce API',
        version: '1.0.0',
        description: 'API para la gestión de productos, categorías y órdenes en un sistema de e-commerce',
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/interfaces/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec,
};