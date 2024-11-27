const request = require('supertest');
const app = require('../../src/app');
const { connectMockMongoDB, disconnectMockMongoDB } = require('../mocks/mongooseMock');
const CatalogProduct = require('../../src/infrastructure/db/models/CatalogProductModel');

beforeAll(async () => {
    await connectMockMongoDB();
});

afterAll(async () => {
    await disconnectMockMongoDB();
});

describe('Catalog Controller', () => {
    it('should fetch all catalog products', async () => {
        await CatalogProduct.create({
            name: 'Mock Catalog Product',
            price: 200.0,
            category: 'Mock Category',
        });

        const response = await request(app).get('/api/catalog');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0].name).toBe('Mock Catalog Product');
    });

    it('should fetch a catalog product by ID', async () => {
        const product = await CatalogProduct.create({
            name: 'Mock Catalog Product',
            price: 200.0,
            category: 'Mock Category',
        });

        const response = await request(app).get(`/api/catalog/${product._id}`);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Mock Catalog Product');
    });
});
