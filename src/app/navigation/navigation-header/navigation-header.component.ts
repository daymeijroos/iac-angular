import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Category } from 'src/app/category/category.interface';
import { CategoryService } from 'src/app/category/category.service';
import { Product } from 'src/app/product/product.interface';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {
  categories: Category[] = []
  shownProducts?: Product[];
  

  constructor(private categoryService: CategoryService, private auth: AuthService) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories
    })
  }

  showProducts(products: Product[]) {
    this.shownProducts = products
  }

  hideProducts() {
    this.shownProducts = undefined
  }
}
​