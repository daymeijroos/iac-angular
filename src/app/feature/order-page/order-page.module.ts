import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingDetailsFormComponent } from './shipping-details-form/shipping-details-form.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { OrderMenuComponent } from './order-menu/order-menu.component';



@NgModule({
  declarations: [
    ShippingDetailsFormComponent,
    OrderMenuComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
  ]
})
export class OrderPageModule { }
