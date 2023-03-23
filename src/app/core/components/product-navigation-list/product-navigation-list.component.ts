import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/entities/product/product.interface';

@Component({
  selector: 'app-product-navigation-list',
  templateUrl: './product-navigation-list.component.html',
  styleUrls: ['./product-navigation-list.component.scss']
})
export class ProductNavigationListComponent {
  @Input() products?: Product[] = []

  constructor(private router: Router) {}

  redirectToProduct(product: Product) {
    this.router.navigate(['product', product.name])
  }
}
