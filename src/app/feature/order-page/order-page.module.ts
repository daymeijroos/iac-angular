import { MatCardModule } from '@angular/material/card'
import { SharedModule } from './../../shared/shared.module'
import { MatTableModule } from '@angular/material/table'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingDetailsFormComponent } from './shipping-details-form/shipping-details-form.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { ShippingDetailsOverviewComponent } from './shipping-details-overview/shipping-details-overview.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { MatListModule } from '@angular/material/list';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';



@NgModule({
  declarations: [
    ShippingDetailsFormComponent,
    ShippingDetailsOverviewComponent,
    OrderOverviewComponent,
    PlaceOrderComponent,
    ConfirmationPageComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
    ReactiveFormsModule,
    SharedModule,
    MatCardModule
  ],
  exports: [
    PlaceOrderComponent,
    ConfirmationPageComponent
  ]
})
export class OrderPageModule { }
