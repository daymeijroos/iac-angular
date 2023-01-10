import { Product } from "../product/product.interface";

export interface Category {
  id: String
  name: String
  description: String
  products: Product[]
}
