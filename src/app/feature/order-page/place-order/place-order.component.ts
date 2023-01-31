import { OrderService } from './../../../core/entities/order/order.service'
import { PaymentMethod, ReversePaymentMethod } from '../../../core/entities/order/payment-method.enum'
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { AuthService } from '@auth0/auth0-angular';
import { LineItem } from 'src/app/core/entities/line-item/line-item.model';
import { Order } from 'src/app/core/entities/order/order.interface';
import { ShippingDetails } from 'src/app/core/entities/shipping-details/shipping-details.interface';
import { ShippingDetailsService } from 'src/app/core/entities/shipping-details/shipping-details.service';
import { CartService } from 'src/app/core/entities/cart/cart.service';
import { Cart } from 'src/app/core/entities/cart/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  PaymentMethod = ReversePaymentMethod

  @ViewChild("stepper") stepper?: MatStepper

  cart?: Cart;
  shippingDetails?: ShippingDetails
  paymentMethod?: PaymentMethod

  constructor(public auth: AuthService, private shippingDetailsService: ShippingDetailsService, private cartService: CartService, private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe((value) => {
      if (value) {
        this.fetchShippingDetails()
      }
    })

    this.cart = this.cartService.getCart()
  }

  fetchShippingDetails() {
    this.shippingDetailsService.get().subscribe(result => {
      if (typeof result === "string") return
      this.shippingDetails = result
    })
  }

  login() {
    this.auth.loginWithPopup().subscribe(() => {
      this.fetchShippingDetails()
      this.stepper?.next()
    });
  }

  continueAsGuest() {
    this.stepper?.next()
  }

  setShippingDetails(shippingDetails: ShippingDetails) {
    this.shippingDetails = shippingDetails;
    this.stepper?.next()
  }

  setPaymentMethod(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  placeOrder() {
    if (this.shippingDetails && this.cart?.getLineItems()) {
      let order: Order = {
        shippingDetails: this.shippingDetails,
        lineItems: this.cart?.getLineItems(),
        paymentMethod: this.paymentMethod? this.paymentMethod : PaymentMethod.NEUROPAY
      }
      
      this.orderService.post(order).subscribe(
        result => {
          if (typeof result === "string") {
            alert(result)
            return
          }
          this.cartService.clearCart()
          this.router.navigate(["/order", result.id])
        }
      )
    }
  }
}
