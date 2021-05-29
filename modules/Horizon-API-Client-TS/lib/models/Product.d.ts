export default class Product {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    ownerID: number;
    ownerType: string;
    constructor(apiProductResponse: any);
}
