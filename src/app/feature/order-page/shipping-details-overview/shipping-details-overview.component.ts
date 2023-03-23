import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from 'src/app/core/entities/shipping-details/country.enum';
import { ShippingDetails } from 'src/app/core/entities/shipping-details/shipping-details.interface';

@Component({
  selector: 'app-shipping-details-overview',
  templateUrl: './shipping-details-overview.component.html',
  styleUrls: ['./shipping-details-overview.component.scss']
})
export class ShippingDetailsOverviewComponent {
  @Input() shippingDetails?: ShippingDetails;
  @Output() editEvent = new EventEmitter<void>;

  constructor() {}

  edit() {
    this.editEvent.emit();
  }

  displayedColumns = ['name', 'address', 'city', 'country', 'postalCode', 'phone'];
}
