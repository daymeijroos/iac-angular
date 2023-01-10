import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartPageModule } from './shopping-cart-page/shopping-cart-page.module';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingCartPageModule,
    HomePageModule
  ],
  exports: [
    ProductPageComponent,
    ShoppingCartPageModule,
    HomePageModule
  ]
})
export class FeatureModule { }
