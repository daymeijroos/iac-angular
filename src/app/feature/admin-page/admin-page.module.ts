import { RouterModule } from '@angular/router'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableModule } from '@angular/material/table'
import { MatListModule } from '@angular/material/list'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminCategoryPageComponent } from './admin-category-page/admin-category-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AdminCategoryFormComponent } from './admin-category-form/admin-category-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AdminProductPageComponent } from './admin-product-page/admin-product-page.component';
import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';



@NgModule({
  declarations: [
    AdminPageComponent,
    AdminCategoryPageComponent,
    AdminCategoryFormComponent,
    AdminProductPageComponent,
    AdminProductFormComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule,
  ]
})
export class AdminPageModule { }
