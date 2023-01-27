import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/entities/cart/cart.service';
import { Product } from '../../core/entities/product/product.interface';
import { ProductService } from 'src/app/core/entities/product/product.service';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  productName?: string
  product?: Product

  inCart: boolean = false

  constructor(private productService: ProductService, private cartService: CartService, private router: Router, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.productName = params['productName']
      this.setProduct()
    })
  }
  ngOnInit(): void {

  }

  setProduct() {
    this.productService.getByName(this.productName!).subscribe({
      next: (product) => {
        this.product = product[0]
        this.cartService.getCartObservable().subscribe((cart) => {
          if (this.product) {
            this.inCart = cart.isInCart(this.product)
          }
        })
      }, 
      error: () => {
        this.router.navigate(["404"])
      }
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }

  removeFromCart(product: Product) {
    this.cartService.removeAllFromCart(product)
  }
}
