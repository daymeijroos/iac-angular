import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Category } from 'src/app/core/entities/category/category.interface';
import { CategoryService } from 'src/app/core/entities/category/category.service';
import { Product } from 'src/app/core/entities/product/product.interface';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {
  categories: Category[] = []
  shownProducts?: Product[];
  

  constructor(private categoryService: CategoryService, private auth: AuthService, private router: Router) {}

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

  redirectHome() {
    this.router.navigate(['/'])
  }

  redirectToCart() {
    this.router.navigate(['cart'])
  }
}
​