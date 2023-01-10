import { Component, OnInit } from '@angular/core';
import { ProductFilter } from 'src/app/core/entities/product/product-filter.enum';
import { Product } from 'src/app/core/entities/product/product.interface';
import { ProductService } from 'src/app/core/entities/product/product.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService) {}

  landing?: Product
  featured?: Product[]

  ngOnInit(): void {
    this.productService.getByFilter(ProductFilter.LANDING).subscribe((response) => {
      this.landing = response[0]
    });
    this.productService.getByFilter(ProductFilter.FEATURED).subscribe((response) => {
      this.featured = response
    });
  }
}
