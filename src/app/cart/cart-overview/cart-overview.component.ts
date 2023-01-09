import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product.interface';
import { Cart } from '../cart.model';
import { CartService } from '../service/cart.service';

@Component({
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.scss']
})
export class CartOverviewComponent {
  cart;

  constructor(private cartService: CartService) {
    this.cart = cartService.getCartObservable()
  }

  clearCart() {
    this.cartService.clearCart()
  }
}
