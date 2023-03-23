import { CategoryService } from 'src/app/core/entities/category/category.service'
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/core/entities/category/category.interface';
import { AdminCategoryPageComponent } from '../admin-category-page/admin-category-page.component';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.scss']
})
export class AdminCategoryFormComponent {
  categoryForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  }, {validators: Validators.required})

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AdminCategoryPageComponent>, private categoryService: CategoryService, @Inject(MAT_DIALOG_DATA) private data?: Category) {
    if (this.data) {
      this.categoryForm.patchValue(this.data)
    }
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    if (this.categoryForm.valid) {
      let category: Category = {
        id: this.data?.id,
        name: this.categoryForm.value.name!,
        description: this.categoryForm.value.description!,
        products: this.data?.products
      }

      if (this.data) {
        this.categoryService.edit(category, () => this.dialogRef.close())
      } else {
        this.categoryService.create(category, () => this.dialogRef.close())
      }
    }
  }
}
