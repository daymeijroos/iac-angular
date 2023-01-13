import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartLineComponent } from './cart-line/cart-line.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CartLineComponent,
    CartListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    SharedModule,
    MatButtonModule
  ],
  exports: [
    CartListComponent
  ]
})
export class ShoppingCartPageModule { }
