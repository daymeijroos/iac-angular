import { Component } from '@angular/core';
import { CartService } from '../../../core/entities/cart/cart.service';

@Component({
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  cart;

  constructor(private cartService: CartService) {
    this.cart = cartService.getCartObservable()
  }

  clearCart() {
    this.cartService.clearCart()
  }
}
