import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product/product.interface';

@Component({
  selector: 'app-product-navigation-list',
  templateUrl: './product-navigation-list.component.html',
  styleUrls: ['./product-navigation-list.component.scss']
})
export class ProductNavigationListComponent {
  @Input() products?: Product[] = []
}
