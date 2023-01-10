import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartPageModule } from './shopping-cart-page/shopping-cart-page.module';
import { HomePageModule } from './home-page/home-page.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    ShoppingCartPageModule,
    HomePageModule,
  ],
  exports: [
    ProductPageComponent,
    ShoppingCartPageModule,
    HomePageModule
  ]
})
export class FeatureModule { }
