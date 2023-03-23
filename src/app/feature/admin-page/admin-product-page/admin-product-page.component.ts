import { ProductService } from './../../../core/entities/product/product.service'
import { Product } from './../../../core/entities/product/product.interface'
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AdminProductFormComponent } from '../admin-product-form/admin-product-form.component';

@Component({
  selector: 'app-admin-product-page',
  templateUrl: './admin-product-page.component.html',
  styleUrls: ['./admin-product-page.component.scss']
})
export class AdminProductPageComponent {
  products: Observable<Array<Product>>

  constructor(private productService: ProductService, private dialog: MatDialog) { 
    this.products = this.productService.getAll()
  }

  create() {
    this.dialog.open(AdminProductFormComponent)
  }
  
  edit(product: Product) {
    this.dialog.open(AdminProductFormComponent, {
      data: product
    })
  }

  delete(product: Product) {
    this.productService.delete(product)
  }
}
