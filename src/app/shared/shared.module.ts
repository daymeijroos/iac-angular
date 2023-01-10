import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { GYIPipe } from './pipes/gyi.pipe';

@NgModule({
  declarations: [
    LoginButtonComponent,
    GYIPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginButtonComponent,
    GYIPipe,
  ]
})
export class SharedModule { }
