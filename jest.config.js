module.exports = {
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@config/(.*)$': '<rootDir>/src/config/$1',
        '^@domain/(.*)$': '<rootDir>/src/domain/$1',
        '^@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
        '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    },
    modulePaths: ['<rootDir>/src'], // Agrega `src` como raíz para las rutas
};
