import { ProductFilter } from "./product-filter.enum"

export interface Product {
  id?: string
  name: string
  description: string
  price: number
  imageUrl: string
  categoryId: string
  categoryName?: string
  filter: ProductFilter
}
