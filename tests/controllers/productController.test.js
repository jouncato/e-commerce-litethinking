const request = require('supertest');
const app = require('../../src/app');
const { ProductMock } = require('../mocks/sequelizeMock');

describe('Product Controller', () => {
    it('should fetch all products', async () => {
        ProductMock.findAll = jest.fn().mockResolvedValue([
            { id: 1, name: 'Mock Product', price: 100.0, categoryId: 1 },
        ]);

        const response = await request(app).get('/api/products');
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].name).toBe('Mock Product');
    });

    it('should fetch a single product by ID', async () => {
        ProductMock.findByPk = jest.fn().mockResolvedValue({
            id: 1,
            name: 'Mock Product',
            price: 100.0,
            categoryId: 1,
        });

        const response = await request(app).get('/api/products/1');
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Mock Product');
    });
});
