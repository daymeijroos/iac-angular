import { LineItem } from "../line-item/line-item.model";
import { ShippingDetails } from "../shipping-details/shipping-details.interface";
import { PaymentMethod } from "./payment-method.enum";
import { ShippingStatus } from "./shipping-status.enum";

export interface Order {
  id?: string
  lineItems: LineItem[]
  shippingDetails: ShippingDetails
  paymentMethod: PaymentMethod
  shippingStatus?: ShippingStatus
  totalPrice?: number
}
