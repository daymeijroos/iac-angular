import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Category } from 'src/app/category/category.interface';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {
  categories: Category[] = []

  constructor(private categoryService: CategoryService, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.categoryService.getAll().subscribe((cats) => {
          this.categories = cats
        })
      }
    })
  }
}
​