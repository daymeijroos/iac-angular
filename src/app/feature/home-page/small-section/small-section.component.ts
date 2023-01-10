import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/entities/product/product.interface';

@Component({
  selector: 'app-small-section',
  templateUrl: './small-section.component.html',
  styleUrls: ['./small-section.component.scss']
})
export class SmallSectionComponent {
  @Input() product?: Product;

  constructor(private router: Router) {}

  redirectToProduct() {
    this.router.navigate(['product', this.product?.name])
  }
}
