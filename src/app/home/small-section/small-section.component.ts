import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product/product.interface';

@Component({
  selector: 'app-small-section',
  templateUrl: './small-section.component.html',
  styleUrls: ['./small-section.component.scss']
})
export class SmallSectionComponent {
  @Input() product?: Product;

  constructor(private router: Router) {}

  redirectToProduct() {
    this.router.navigate([this.product?.name])
  }
}
