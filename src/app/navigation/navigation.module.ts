import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { AuthorizationModule } from '../authorization/authorization.module';
import { ProductNavigationListComponent } from './product-navigation-list/product-navigation-list.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherX } from '@ng-icons/feather-icons';

@NgModule({
  declarations: [
    NavigationHeaderComponent,
    ProductNavigationListComponent
  ],
  imports: [
    CommonModule,
    AuthorizationModule,
    NgIconsModule.withIcons({ featherX })
  ],
  exports: [
    NavigationHeaderComponent
  ]
})
export class NavigationModule { }
