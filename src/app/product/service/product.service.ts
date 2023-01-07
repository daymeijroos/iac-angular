import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductFilter } from '../product-filter.enum';
import { Product } from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getByFilter(filter: ProductFilter) {
    return this.http.get<Array<Product>>("/api/product", {
      params: {
        'filter': filter
      }
    })
  }

  getByName(name: string) {
    return this.http.get<Array<Product>>("/api/product", {
      params: {
        'name': name
      }
    })
  }
}
