import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __exportStar } from 'tslib';
import { ProductPageComponent } from './product-page/product-page.component';
import { MatButtonModule } from '@angular/material/button';
import { NgIconsModule } from '@ng-icons/core';
import { featherShoppingCart } from '@ng-icons/feather-icons';
import { CurrencyModule } from '../currency/currency.module';
import { CartModule } from '../cart/cart.module';


@NgModule({
  declarations: [
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    NgIconsModule.withIcons({ featherShoppingCart }),
    CartModule,
    CurrencyModule,
  ]
})
export class ProductModule { }
