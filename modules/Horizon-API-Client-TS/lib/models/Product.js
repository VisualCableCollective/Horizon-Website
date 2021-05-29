"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(apiProductResponse) {
        this.id = apiProductResponse.id;
        this.name = apiProductResponse.name;
        this.createdAt = new Date(apiProductResponse.created_at);
        this.updatedAt = new Date(apiProductResponse.updated_at);
        this.ownerID = apiProductResponse.ownable_id;
        this.ownerType = apiProductResponse.ownable_type;
    }
}
exports.default = Product;
