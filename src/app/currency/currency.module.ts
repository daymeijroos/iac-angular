import { NgModule } from '@angular/core';
import { GYIPipe } from './gyi.pipe';

@NgModule({
  declarations: [
    GYIPipe
  ],
  exports: [
    GYIPipe
  ]
})
export class CurrencyModule { }
