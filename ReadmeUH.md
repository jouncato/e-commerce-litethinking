# E-commerce API

Esta es una API para gestionar productos, categorías y órdenes en un sistema de comercio electrónico. El proyecto utiliza Node.js, PostgreSQL, Jest para pruebas, y sigue principios SOLID y arquitectura hexagonal.

## Tecnologías Utilizadas

- **Node.js**: Framework principal para el desarrollo de la API.
- **PostgreSQL**: Base de datos relacional para almacenamiento.
- **Jest**: Framework de pruebas para TDD y BDD.
- **Express**: Framework para manejar rutas y middleware.
- **Sequelize**: ORM para interactuar con la base de datos.

---

## Historias de Usuario

### TDD (Test-Driven Development)

#### 1. Crear un Producto

**Descripción**:  
Como desarrollador, quiero crear un producto en el sistema para almacenarlo en la base de datos.

**Criterios de Aceptación**:
1. La API debe permitir enviar un nombre, precio y categoría del producto.
2. El producto debe ser creado con un estado HTTP 201 si los datos son válidos.
3. Si faltan datos obligatorios, debe responder con un estado HTTP 400 y un mensaje de error.

**Pruebas Unitarias**:
- Validar que el endpoint `POST /api/products` crea un producto válido.
- Verificar que devuelve un error 400 si falta algún dato requerido.

---

#### 2. Obtener todos los Productos

**Descripción**:  
Como desarrollador, quiero obtener todos los productos almacenados en la base de datos para mostrarlos en la interfaz.

**Criterios de Aceptación**:
1. La API debe responder con un arreglo de productos al llamar a `GET /api/products`.
2. Si no hay productos, debe responder con un arreglo vacío.

**Pruebas Unitarias**:
- Verificar que el endpoint devuelve un código HTTP 200 y un arreglo.
- Comprobar que devuelve un arreglo vacío si no hay productos.

---

#### 3. Obtener un Producto por ID

**Descripción**:  
Como desarrollador, quiero buscar un producto específico por su ID para mostrar sus detalles.

**Criterios de Aceptación**:
1. La API debe devolver un producto si el ID es válido y existe.
2. Si el ID no existe, debe devolver un error HTTP 404 con un mensaje.

**Pruebas Unitarias**:
- Validar que `GET /api/products/:id` devuelve un producto válido.
- Verificar que devuelve un error 404 si el ID no existe.

---

#### 4. Actualizar un Producto

**Descripción**:  
Como desarrollador, quiero actualizar los detalles de un producto para mantener la información actualizada.

**Criterios de Aceptación**:
1. La API debe permitir actualizar el nombre, precio y categoría del producto.
2. Si el producto no existe, debe devolver un error HTTP 404.

**Pruebas Unitarias**:
- Validar que `PUT /api/products/:id` actualiza correctamente un producto existente.
- Verificar que devuelve un error 404 si el producto no existe.

---

#### 5. Eliminar un Producto

**Descripción**:  
Como desarrollador, quiero eliminar un producto del sistema para mantener limpia la base de datos.

**Criterios de Aceptación**:
1. La API debe permitir eliminar un producto enviando su ID.
2. Si el producto no existe, debe devolver un error HTTP 404.

**Pruebas Unitarias**:
- Validar que `DELETE /api/products/:id` elimina un producto existente.
- Verificar que devuelve un error 404 si el producto no existe.

---

#### 6. Validar la Conexión a la Base de Datos

**Descripción**:  
Como desarrollador, quiero asegurarme de que la base de datos esté conectada antes de que el servidor inicie.

**Criterios de Aceptación**:
1. Si la conexión falla, el servidor no debe iniciar.
2. Si la conexión es exitosa, el servidor debe iniciar y estar disponible.

**Pruebas Unitarias**:
- Verificar que el servidor no inicia si falla la conexión.
- Comprobar que inicia correctamente si la conexión es exitosa.

---

### BDD (Behavior-Driven Development)

#### 1. Crear un Producto

**Escenario**:
- **Given**: Un usuario envía una solicitud para crear un producto con datos válidos.
- **When**: Se envía una solicitud `POST /api/products` con nombre, precio y categoría.
- **Then**: El producto debe ser creado y la respuesta debe ser HTTP 201 con los detalles del producto.

---

#### 2. Crear un Producto sin Datos Obligatorios

**Escenario**:
- **Given**: Un usuario intenta crear un producto sin enviar un nombre o precio.
- **When**: Se envía una solicitud `POST /api/products` con datos incompletos.
- **Then**: La API debe responder con HTTP 400 y un mensaje indicando los campos faltantes.

---

#### 3. Obtener todos los Productos

**Escenario**:
- **Given**: Existen productos en la base de datos.
- **When**: Se envía una solicitud `GET /api/products`.
- **Then**: La API debe devolver una lista de productos con un estado HTTP 200.

---

#### 4. Obtener un Producto por ID

**Escenario**:
- **Given**: Existe un producto con un ID específico en la base de datos.
- **When**: Se envía una solicitud `GET /api/products/:id` con un ID válido.
- **Then**: La API debe devolver el producto correspondiente con un estado HTTP 200.

---

#### 5. Intentar Obtener un Producto Inexistente

**Escenario**:
- **Given**: Un producto con el ID proporcionado no existe.
- **When**: Se envía una solicitud `GET /api/products/:id` con un ID inválido o inexistente.
- **Then**: La API debe devolver un error HTTP 404 con un mensaje indicando que el producto no fue encontrado.

---

#### 6. Actualizar un Producto

**Escenario**:
- **Given**: Existe un producto en la base de datos que necesita actualizarse.
- **When**: Se envía una solicitud `PUT /api/products/:id` con nuevos datos de nombre, precio o categoría.
- **Then**: El producto debe actualizarse y la respuesta debe incluir el producto actualizado con un estado HTTP 200.

---

## Ejecución de Pruebas

Para ejecutar las pruebas unitarias y de integración, utiliza el siguiente comando:

```bash
npm test
