import { Country } from "./country.enum";

export interface ShippingDetails {
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  country: Country;
  city: string;
  postalCode: string;
  address: string;
}
