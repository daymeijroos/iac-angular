import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './service/product.service';
import { __exportStar } from 'tslib';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductService,
  ],
  exports: [
    ProductService,
  ]
})
export class ProductModule { }
