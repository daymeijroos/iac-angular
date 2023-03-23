import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../product/product.interface';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject: BehaviorSubject<Cart>

  private storeCart(cart: Cart) {
    this.cartSubject.next(cart)
    localStorage.setItem(`cart`, JSON.stringify(cart))
  }

  constructor() {
    this.cartSubject = new BehaviorSubject(this.getCart())
  }

  public getCartObservable() {
    return this.cartSubject.asObservable()
  }

  public getCart(): Cart {
    let cart: Cart = new Cart(JSON.parse(localStorage.getItem(`cart`)!))
    return cart
  }

  public addToCart(product: Product) {
    let cart: Cart = this.getCart()
    cart.addProduct(product)
    this.storeCart(cart)
  }

  public changeQuantity(product: Product, quantity: number) {
    let cart: Cart = this.getCart()
    cart.changeQuantity(product, quantity)
    this.storeCart(cart)
  }

  public removeFromCart(product: Product) {
    let cart: Cart = this.getCart()
    cart.removeProduct(product)
    this.storeCart(cart)
  }

  removeAllFromCart(product: Product) {
    let cart: Cart = this.getCart()
    cart.removeLineWithProduct(product)
    this.storeCart(cart)
  }

  public clearCart() {
    let cart = this.getCart()
    cart.clearLines()
    this.storeCart(cart)
  }
}
