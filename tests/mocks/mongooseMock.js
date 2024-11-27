const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

const connectMockMongoDB = async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

const disconnectMockMongoDB = async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
};

module.exports = { connectMockMongoDB, disconnectMockMongoDB };
