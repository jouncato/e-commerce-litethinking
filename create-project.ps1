# Define the base directory
$baseDir = "e-commerce-litethinking"

# Create directory structure
$folders = @(
    "$baseDir/src/config",
    "$baseDir/src/domain/entities",
    "$baseDir/src/domain/repositories",
    "$baseDir/src/infrastructure/db/models",
    "$baseDir/src/infrastructure/sequelize",
    "$baseDir/src/interfaces/controllers",
    "$baseDir/src/interfaces/routes",
    "$baseDir/tests/controllers",
    "$baseDir/tests/services",
    "$baseDir/tests/repositories"
)

# Create the directories
foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder
}

# Define files to create with their paths
$files = @(
    "$baseDir/src/config/database.js",
    "$baseDir/src/config/dotenv.config.js",
    "$baseDir/src/domain/entities/Category.js",
    "$baseDir/src/domain/entities/Order.js",
    "$baseDir/src/domain/entities/Product.js",
    "$baseDir/src/domain/repositories/categoryRepository.js",
    "$baseDir/src/domain/repositories/orderRepository.js",
    "$baseDir/src/domain/repositories/productRepository.js",
    "$baseDir/src/infrastructure/db/models/CategoryModel.js",
    "$baseDir/src/infrastructure/db/models/OrderModel.js",
    "$baseDir/src/infrastructure/db/models/ProductModel.js",
    "$baseDir/src/infrastructure/sequelize/setupDatabase.js",
    "$baseDir/src/interfaces/controllers/categoryController.js",
    "$baseDir/src/interfaces/controllers/orderController.js",
    "$baseDir/src/interfaces/controllers/productController.js",
    "$baseDir/src/interfaces/routes/categoryRoutes.js",
    "$baseDir/src/interfaces/routes/orderRoutes.js",
    "$baseDir/src/interfaces/routes/productRoutes.js",
    "$baseDir/src/app.js",
    "$baseDir/.env",
    "$baseDir/jest.config.js",
    "$baseDir/server.js"
)

# Create each file and write an initial comment in each
foreach ($file in $files) {
    New-Item -ItemType File -Force -Path $file | Out-Null
    Add-Content -Path $file -Value "// $([System.IO.Path]::GetFileName($file)) - Auto-generated file"
}

Write-Output "Project structure created successfully at $baseDir"
