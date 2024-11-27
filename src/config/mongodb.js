const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB || 'catalog';

const connectMongoDB = async () => {
    try {
        await mongoose.connect(`${uri}/${dbName}`);
        console.log('Connected to MongoDB with Mongoose');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Salir si no se puede conectar
    }
};

module.exports = connectMongoDB;

