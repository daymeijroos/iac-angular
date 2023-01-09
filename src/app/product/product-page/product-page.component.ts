import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from '../product.interface';
import { ProductService } from '../service/product.service';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  productName?: string;
  product?: Product

  constructor(private productService: ProductService, private cartService: CartService, private router: Router, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.productName = params['productName']
      this.setProduct()
    });
  }

  setProduct() {
    if (this.productName) {
      this.productService.getByName(this.productName!).subscribe({
        next: (product) => {
          this.product = product[0]
        }, 
        error: () => {
          this.router.navigate(["404"])
        }
      })
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
}
