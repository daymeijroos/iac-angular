import { Category } from './../../../core/entities/category/category.interface'
import { CategoryService } from './../../../core/entities/category/category.service'
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-category-page',
  templateUrl: './admin-category-page.component.html',
  styleUrls: ['./admin-category-page.component.scss']
})
export class AdminCategoryPageComponent {
  categories: Array<Category> = [];

  constructor(private categoryService: CategoryService) { 
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories
    })
  }

  createCategory() {
    const category: Category = {
      name: "New Category",
      description: "New Category Description"
    }

    this.categoryService.create(category).subscribe(category => {
      this.categories.push(category);
    })
  }

  deleteCategory(category: Category) {
    this.categoryService.delete(category).subscribe(() => {
      this.categories = this.categories.filter(c => c.id !== category.id);
    });
  }
}
