import { MatListModule } from '@angular/material/list'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminCategoryPageComponent } from './admin-category-page/admin-category-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AdminPageComponent,
    AdminCategoryPageComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class AdminPageModule { }
