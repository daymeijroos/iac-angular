import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BigSectionComponent } from './big-section/big-section.component'
import { HomeComponent } from './home/home.component'
import { ProductModule } from '../product/product.module'
import { MatButtonModule } from '@angular/material/button'
import { NgIconsModule } from '@ng-icons/core';
import { featherChevronRight } from '@ng-icons/feather-icons';
import { SmallSectionComponent } from './small-section/small-section.component';

@NgModule({
  declarations: [
    BigSectionComponent,
    HomeComponent,
    SmallSectionComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    MatButtonModule,
    NgIconsModule.withIcons({ featherChevronRight })
  ]
})
export class HomeModule { }
