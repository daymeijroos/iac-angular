import { Country } from "./country.enum";

export interface ShippingDetails {
  id: String;
  user_id: String;
  firstName: String;
  lastName: String;
  phone: String;
  country: Country;
  city: String;
  postalCode: String;
  address: String;
}
