import { Category } from "../category/category.interface"

export interface Product {
  id: String
  name: String
  price: Number
  imageURL: String
  category: Category
}
