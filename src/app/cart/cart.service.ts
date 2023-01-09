import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../product/product.interface';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject: Subject<Cart>;

  private storeCart(cart: Cart) {
    this.cartSubject.next(cart)
    localStorage.setItem(`cart`, JSON.stringify(cart))
  }

  constructor() {
    this.cartSubject = new Subject()
  }

  public getCartObservable() {
    return this.cartSubject.asObservable()
  }

  public getCart(): Cart {
    if (!localStorage.getItem(`cart`)) return new Cart()
    return JSON.parse(localStorage.getItem(`cart`)!)
  }

  public addToCart(product: Product) {
    let cart = this.getCart()
    cart.addProduct(product)
    this.storeCart(cart)
  }

  public removeFromCart(product: Product) {
    let cart = this.getCart()
    cart.removeProduct(product)
    this.storeCart(cart)
  }

  public clearCart() {
    let cart = this.getCart()
    cart.clear
    this.storeCart(cart)
  }
}
