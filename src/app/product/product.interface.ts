import { Category } from "../category/category.interface"

export interface Product {
  id: String
  name: String
  description: String
  price: Number
  imageUrl: String
  categoryId: String
  categoryName: String
}
