import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';
import { CartItemComponent } from './cart-item/cart-item.component'
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CartOverviewComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ]
})
export class CartModule { }
