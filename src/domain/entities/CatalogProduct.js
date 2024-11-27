class CatalogProduct {
    constructor({ id, name, price, categoryId, createdAt, updatedAt }) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.categoryId = categoryId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static fromPayload(payload) {
        const { id, name, price, category_id: categoryId, created_at: createdAt, updated_at: updatedAt } = payload;
        return new CatalogProduct({
            id,
            name,
            price,
            categoryId,
            createdAt: new Date(createdAt),
            updatedAt: new Date(updatedAt),
        });
    }
}

module.exports = CatalogProduct;
