import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { AuthorizationModule } from '../authorization/authorization.module';



@NgModule({
  declarations: [
    NavigationHeaderComponent
  ],
  imports: [
    CommonModule,
    AuthorizationModule
  ],
  exports: [
    NavigationHeaderComponent
  ]
})
export class NavigationModule { }
