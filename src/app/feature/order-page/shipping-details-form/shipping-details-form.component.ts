import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { ShippingDetails } from 'src/app/core/entities/shipping-details/shipping-details.interface'
import { ShippingDetailsModel } from 'src/app/core/entities/shipping-details/shipping-details.model'
import { ShippingDetailsService } from 'src/app/core/entities/shipping-details/shipping-details.service'
import { Country, CountryDisplay, } from 'src/app/core/entities/shipping-details/country.enum'
import { AuthService } from '@auth0/auth0-angular'

@Component({
  selector: 'app-shipping-details-form',
  templateUrl: './shipping-details-form.component.html',
  styleUrls: ['./shipping-details-form.component.scss']
})
export class ShippingDetailsFormComponent  implements OnChanges {
  constructor(private fb: FormBuilder, public auth: AuthService) {}
  @Input() shippingDetails?: ShippingDetails;
  @Output() submitEvent = new EventEmitter<ShippingDetails>()

  countries = CountryDisplay

  shippingDetailsForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: [''],
    country: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required],
    postalCode: ['', Validators.required],
  }, {validators: Validators.required});

  ngOnChanges() {
    if (this.shippingDetails) {
      this.shippingDetailsForm.patchValue({
        firstName: this.shippingDetails.firstName,
        lastName: this.shippingDetails.lastName,
        phone: this.shippingDetails.phone,
        country: this.shippingDetails.country,
        city: this.shippingDetails.city,
        address: this.shippingDetails.address,
        postalCode: this.shippingDetails.postalCode,
      })
    }
  }

  submit() {
    if (this.shippingDetailsForm.valid) {
      const shippingDetails: ShippingDetails = {
        firstName: this.shippingDetailsForm.value.firstName!,
        lastName: this.shippingDetailsForm.value.lastName!,
        phone: this.shippingDetailsForm.value.phone!,
        country: this.shippingDetailsForm.value.country! as Country,
        city: this.shippingDetailsForm.value.city!,
        postalCode: this.shippingDetailsForm.value.postalCode!,
        address: this.shippingDetailsForm.value.address!,
      }

      this.submitEvent.emit(shippingDetails)
    }
  }
}
