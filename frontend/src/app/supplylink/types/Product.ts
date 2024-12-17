
export class Product {
    productId: number;
    warehouseId: string;
    productName: string;
    productDescription: string;
    quantity: number;
    price: number;

    constructor(
        productId: number,
        warehouseId: string,
        productName: string,
        productDescription: string,
        quantity: number,
        price: number
    ) {
        this.productId = productId;
        this.warehouseId = warehouseId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.quantity = quantity;
        this.price = price;
    }

    displayInfo() {
        console.log(`Product ID: ${this.productId}`);
        console.log(`Warehouse ID: ${this.warehouseId}`);
        console.log(`quantity: ${this.quantity}`);
    }
}

const product = new Product(1, "12", "table", "table desc", 100, 1500.0);
product.displayInfo();
