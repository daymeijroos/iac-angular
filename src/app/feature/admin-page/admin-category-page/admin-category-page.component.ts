import { AdminCategoryFormComponent } from './../admin-category-form/admin-category-form.component'
import { Category } from './../../../core/entities/category/category.interface'
import { CategoryService } from './../../../core/entities/category/category.service'
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-category-page',
  templateUrl: './admin-category-page.component.html',
  styleUrls: ['./admin-category-page.component.scss']
})
export class AdminCategoryPageComponent {
  categories: Observable<Array<Category>>

  constructor(private categoryService: CategoryService, private dialog: MatDialog) { 
    this.categories = this.categoryService.getAll()
  }

  create() {
    this.dialog.open(AdminCategoryFormComponent)
  }

  edit(category: Category) {
    this.dialog.open(AdminCategoryFormComponent, {
      data: category
    })
  }

  delete(category: Category) {
    this.categoryService.delete(category)
  }
}
