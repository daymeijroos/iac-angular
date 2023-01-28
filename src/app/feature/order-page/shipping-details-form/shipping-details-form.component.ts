import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ShippingDetails } from 'src/app/core/entities/shipping-details/shipping-details.interface';
import { ShippingDetailsModel } from 'src/app/core/entities/shipping-details/shipping-details.model';
import { ShippingDetailsService } from 'src/app/core/entities/shipping-details/shipping-details.service';
import { Country, CountryDisplay, } from 'src/app/core/entities/shipping-details/country.enum';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-shipping-details-form',
  templateUrl: './shipping-details-form.component.html',
  styleUrls: ['./shipping-details-form.component.scss']
})
export class ShippingDetailsFormComponent implements OnInit {
  constructor(private shippingDetailsService: ShippingDetailsService, private fb: FormBuilder, public auth: AuthService) {}

  countries = CountryDisplay

  shippingDetails = this.fb.group({
    firstName: [''],
    lastName: [''],
    phone: [''],
    country: [''],
    city: [''],
    address: [''],
    postalCode: [''],
  }, {validators: Validators.required});

  firstName = this.shippingDetails.controls.firstName;

  ngOnInit() {
    this.shippingDetailsService.get().subscribe(result => {
      if (typeof result === "string") return;
      result = result as ShippingDetailsModel;
      this.shippingDetails.patchValue({
        firstName: result.firstName,
        lastName: result.lastName,
        phone: result.phone,
        country: result.country,
        city: result.city,
        address: result.address,
        postalCode: result.postalCode,
      });
    });
  }

  onSubmit() {
    if (this.shippingDetails.valid) {
      const shippingDetails: ShippingDetails = {
        firstName: this.shippingDetails.value.firstName!,
        lastName: this.shippingDetails.value.lastName!,
        phone: this.shippingDetails.value.phone!,
        country: this.shippingDetails.value.country! as Country,
        city: this.shippingDetails.value.city!,
        postalCode: this.shippingDetails.value.postalCode!,
        address: this.shippingDetails.value.address!,
      }
    }
  }
}
