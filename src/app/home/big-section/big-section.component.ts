import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product/product.interface';

@Component({
  selector: 'app-big-section',
  templateUrl: './big-section.component.html',
  styleUrls: ['./big-section.component.scss']
})
export class BigSectionComponent {
  @Input() product?: Product;


  constructor(private router: Router) {}

  redirectToProduct() {
    this.router.navigate(['product', this.product?.name])
  }
}
