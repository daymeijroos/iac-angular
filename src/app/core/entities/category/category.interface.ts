import { Product } from "../product/product.interface";

export interface Category {
  id?: string
  name: string
  description: string
  products?: Product[]
}
