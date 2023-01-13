import { Component } from '@angular/core';
import { Product } from 'src/app/core/entities/product/product.interface';
import { CartService } from '../../../core/entities/cart/cart.service';

@Component({
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  displayedColumns: string[] = ['imageUrl', 'name', 'quantity', 'price', 'remove']
  cart;

  constructor(private cartService: CartService) {
    this.cart = cartService.getCartObservable()
  }

  clearCart() {
    this.cartService.clearCart()
  }

  changeQuantity(product: Product, quantity: number) {
    this.cartService.changeQuantity(product, quantity)
  }
}
