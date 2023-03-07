import { ReversePaymentMethod } from './../../../core/entities/order/payment-method.enum'
import { ProductService } from './../../../core/entities/product/product.service'
import { Product } from './../../../core/entities/product/product.interface'
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/core/entities/category/category.interface';
import { CategoryService } from 'src/app/core/entities/category/category.service';
import { AdminCategoryPageComponent } from '../admin-category-page/admin-category-page.component';
import { ProductFilter, ReverseProductFilter } from 'src/app/core/entities/product/product-filter.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent {

  productFilters = ReverseProductFilter

  categories: Observable<Category[]>;

  productForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    imageUrl: ['', Validators.required],
    price: [0, Validators.required],
    filter: ['', Validators.required],
    category: ['', Validators.required],
  }, {validators: Validators.required})

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AdminCategoryPageComponent>, private categoryService: CategoryService, private productService: ProductService, @Inject(MAT_DIALOG_DATA) private data?: Product) {
    if (this.data) {
      this.productForm.patchValue({
        name: this.data.name,
        description: this.data.description,
        imageUrl: this.data.imageUrl,
        price: this.data.price,
        filter: this.data.filter,
        category: this.data.categoryId,
      })
    }
    this.categories = this.categoryService.getAll()
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    if (this.productForm.valid) {
      let product: Product = {
        id: this.data?.id,
        name: this.productForm.value.name!,
        description: this.productForm.value.description!,
        imageUrl: this.productForm.value.imageUrl!,
        price: this.productForm.value.price!,
        categoryId: this.productForm.value.category!,
        filter: this.productForm.value.filter! as ProductFilter,
      }

      if (this.data) {
        this.categoryService.edit(product, () => this.dialogRef.close())
      } else {
        this.categoryService.create(product, () => this.dialogRef.close())
      }
    }
  }
}
