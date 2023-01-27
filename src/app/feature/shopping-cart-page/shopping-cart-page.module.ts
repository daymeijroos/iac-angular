import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartListComponent } from './cart-list/cart-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    CartListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    SharedModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    CartListComponent
  ]
})
export class ShoppingCartPageModule { }
