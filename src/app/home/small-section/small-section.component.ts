import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product/product.interface';

@Component({
  selector: 'app-small-section',
  templateUrl: './small-section.component.html',
  styleUrls: ['./small-section.component.scss']
})
export class SmallSectionComponent {
  @Input() product?: Product;
}
