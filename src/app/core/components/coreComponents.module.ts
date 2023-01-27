import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { ProductNavigationListComponent } from './product-navigation-list/product-navigation-list.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherX, featherShoppingCart } from '@ng-icons/feather-icons';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NavigationHeaderComponent,
    ProductNavigationListComponent,
    PrivacyDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
    NgIconsModule.withIcons({ featherX, featherShoppingCart }),
  ],
  exports: [
    NavigationHeaderComponent
  ]
})
export class CoreComponentsModule { }
