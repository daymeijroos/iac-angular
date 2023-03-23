import { PlaceOrderComponent } from './../../order-page/place-order/place-order.component'
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LineItem } from 'src/app/core/entities/line-item/line-item.model';
import { Product } from 'src/app/core/entities/product/product.interface';
import { CartService } from '../../../core/entities/cart/cart.service';

@Component({
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  displayedColumns: string[] = ['image', 'name', 'quantity', 'price', 'remove']
  cart;

  constructor(private cartService: CartService, private router: Router, private dialog: MatDialog) {
    this.cart = cartService.getCartObservable()
  }

  clearCart() {
    this.cartService.clearCart()
  }

  changeQuantity(product: Product, quantity: number) {
    this.cartService.changeQuantity(product, quantity)
  }

  change(event: Event, line: LineItem) {
    const target = event.target as HTMLInputElement
    const quantity = Number(target.value)

    if (quantity > 0) {
      this.changeQuantity(line.product, quantity)
    } else { 
      target.value = line.quantity.toString()
    }
  }

  remove(line: LineItem) {
    this.cartService.removeAllFromCart(line.product)
  }

  checkout() {
    this.dialog.open(PlaceOrderComponent)
  }
}
