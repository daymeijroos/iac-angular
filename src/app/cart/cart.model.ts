import { Product } from "../product/product.interface";

export class Cart {
  private products: Product[] = []

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(productToRemove: Product) {
    this.products = this.products.filter(product => product !== productToRemove)
  }

  clear() {
    this.products = []
  }

  getProducts(): Product[] {
    return this.products
  }

  getPrice(): number {
    let price = 0;
    for (const product of this.products) {
      price += product.price
    }
    return price
  }
}
