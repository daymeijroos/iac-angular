import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../../product/product.interface';
import { Cart } from '../cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject: BehaviorSubject<Cart>;

  private storeCart(cart: Cart) {
    console.log("store")
    this.cartSubject.next(cart)
    localStorage.setItem(`cart`, JSON.stringify(cart))
  }

  private isCart(object: unknown): object is Cart {
    return object != undefined && typeof object === "object"
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

  public removeFromCart(product: Product) {
    let cart: Cart = this.getCart()
    cart.removeProduct(product)
    this.storeCart(cart)
  }

  public clearCart() {
    let cart = this.getCart()
    cart.clear
    console.log("clear")
    this.storeCart(cart)
  }
}
