import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product/product.interface';

@Component({
  selector: 'app-big-section',
  templateUrl: './big-section.component.html',
  styleUrls: ['./big-section.component.scss']
})
export class BigSectionComponent {
  @Input() product?: Product;
}
