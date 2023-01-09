import { Product } from "../product/product.interface";
import { CartType } from "./cart.interface";

export class Cart implements CartType {
  products: Product[] = []

  constructor(cart: CartType) {
    if (cart) {
      this.products = cart.products
    }
  }

  getProducts(): Product[] {
    return this.products
  }


  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(productToRemove: Product) {
    this.products = this.products.filter(product => product !== productToRemove)
  }

  clear() {
    this.products = []
  }

  getPrice(): number {
    let price = 0;
    for (const product of this.products) {
      price += product.price
    }
    return price
  }
}
