import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/entities/product/product.interface';
import { CartService } from '../../../core/entities/cart/cart.service';

@Component({
  selector: 'app-cart-line',
  templateUrl: './cart-line.component.html',
  styleUrls: ['./cart-line.component.scss']
})
export class CartLineComponent {
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

  remove() {
    this.changeQuantity(0)
  }
}
