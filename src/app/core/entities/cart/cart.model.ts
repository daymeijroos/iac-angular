import { LineItem } from "../line-item/line-item.model";
import { Product } from "../product/product.interface";
import { CartType } from "./cart.interface";

export class Cart implements CartType {
  lineItems: LineItem[] = []

  private addLineWithProduct(product: Product) {
    this.lineItems.push(new LineItem(product));
  }

  constructor(cart: CartType) {
    if (cart) {
      this.lineItems = cart.lineItems
    }
  }

  getLineItems(): LineItem[] {
    return this.lineItems
  }


  getTotal(): number {
    let price = 0;
    for (const lineItem of this.lineItems) {
      price += lineItem.product.price * lineItem.quantity
    }
    return price
  }

  isInCart(product: Product): boolean {
    return (this.lineItems.filter((line) => line.product.id === product.id).length > 0)
  }

  addProduct(product: Product) {
    this.lineItems.forEach((lineItem) => {
      if (lineItem.product.id === product.id) {
        lineItem.quantity += 1
        return
      }
    })
    this.addLineWithProduct(product)
  }

  removeProduct(product: Product) {
    this.lineItems.forEach((lineItem) => {
      if (lineItem.product.id === product.id) {
        if (lineItem.quantity > 1) {
          lineItem.quantity -= 1
        } else {
          this.removeLineWithProduct(product)
        }
      }
    })
  }

  changeQuantity(product: Product, quantity: number) {
    if (quantity < 1) {
      this.removeLineWithProduct(product)
      return
    }
    this.lineItems.forEach((lineItem) => {
      if (lineItem.product.id === product.id) {
        lineItem.quantity = quantity
      }
    })
  }

  removeLineWithProduct(product: Product) {
    this.lineItems = this.lineItems.filter(lineItem => lineItem.product.id !== product.id)
  }

  clearLines() {
    this.lineItems = []
  }
}
