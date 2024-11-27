const app = require('./src/app');
const sequelize = require('./src/config/database');
const connectMongoDB = require('./src/config/mongodb');

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        // Conectar a PostgreSQL
        await sequelize.authenticate();
        console.log('Connected to PostgreSQL');

        // Conectar a MongoDB
        await connectMongoDB();

        // Sincronizar PostgreSQL
        await sequelize.sync({ alter: true });

        // Iniciar servidor
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error during startup:', error);
        process.exit(1);
    }
})();
