import { Country } from "./country.enum";
import { ShippingDetails } from "./shipping-details.interface";

export class ShippingDetailsModel implements ShippingDetails {
  firstName: string;
  lastName: string;
  phone?: string;
  country: Country;
  city: string;
  postalCode: string;
  address: string;

  constructor(shippingDetails: ShippingDetails) {
    this.firstName = shippingDetails.firstName;
    this.lastName = shippingDetails.lastName;
    this.phone = shippingDetails.phone;
    this.country = shippingDetails.country;
    this.city = shippingDetails.city;
    this.postalCode = shippingDetails.postalCode;
    this.address = shippingDetails.address;
  }
}