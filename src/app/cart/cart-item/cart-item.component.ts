import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product/product.interface';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product?: Product
  @Input() quantity: number = 1

  constructor(private cartService: CartService) {}

  addToQuantity() {
    if (this.product) {
      this.cartService.addToCart(this.product)
      this.quantity += 1
    }
  }

  removeFromQuantity() {
    if (this.product) {
      this.cartService.removeFromCart(this.product)
      this.quantity -= 1
    }
  }

  changeQuantity(quantity: number) { 
    let iterations = this.quantity - quantity

    while (iterations != 0) {
      if (iterations >= 0) {
        this.removeFromQuantity()
        iterations -= 1
      } else {
        this.addToQuantity()
        iterations += 1
      }
    }
  }
}
