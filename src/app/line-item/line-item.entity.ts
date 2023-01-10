import { Product } from "../product/product.interface"

export class LineItem {
  constructor(product: Product) {
    this.product = product
    this.quantity = 1
  }

  product: Product
  quantity: number
}
