# Usa una imagen oficial de Node.js como base
FROM node:20-alpine3.19

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo de dependencias de tu proyecto
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de tu proyecto
COPY . .

# Expone el puerto que usa tu aplicación
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["node", "server.js"]
