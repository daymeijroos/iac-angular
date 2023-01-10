import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartLineComponent } from './cart-line/cart-line.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [
    CartLineComponent,
    CartListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CartListComponent
  ]
})
export class ShoppingCartPageModule { }
