import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { ProductNavigationListComponent } from './product-navigation-list/product-navigation-list.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherX, featherShoppingCart } from '@ng-icons/feather-icons';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NavigationHeaderComponent,
    ProductNavigationListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgIconsModule.withIcons({ featherX, featherShoppingCart }),
  ],
  exports: [
    NavigationHeaderComponent
  ]
})
export class CoreComponentsModule { }
