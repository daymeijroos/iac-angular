import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    CartOverviewComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CartModule { }
