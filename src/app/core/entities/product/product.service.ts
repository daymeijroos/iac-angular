import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductFilter } from './product-filter.enum';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: BehaviorSubject<Array<Product>>;
  filteredProducts: Map<ProductFilter, BehaviorSubject<Array<Product>>>;

  constructor(private http: HttpClient) {
    this.products = new BehaviorSubject<Array<Product>>([]);
    this.filteredProducts = new Map<ProductFilter, BehaviorSubject<Array<Product>>>();
    this.getRequest().subscribe(products => this.products!.next(products));
  }

  private getRequest() {
    return this.http.get<Array<Product>>("/api/product")
  }

  private postRequest(product: Product) {
    return this.http.post<Product>("/api/admin/product", product)
  }

  private putRequest(product: Product) {
    if (!product.id) {
      throw new Error("Product id is required")
    }
    return this.http.put<Product>("/api/admin/product", product, { params: { id: product.id } })
  }

  private patchRequest(product: Product) {
    if (!product.id) {
      throw new Error("Product id is required")
    }
    return this.http.patch<Product>("/api/admin/product", product, { params: { id: product.id } })
  }

  private deleteRequest(product: Product) {
    if (!product.id) {
      throw new Error("Product id is required")
    }
    return this.http.delete<Product>("/api/admin/product", { params: { id: product.id } })
  }

  legacyGetByFilter(filter: ProductFilter) {
    return this.http.get<Array<Product>>("/api/product", {
      params: {
        'filter': filter
      }
    })
  }

  legacyGetByName(name: string) {
    return this.http.get<Array<Product>>("/api/product", {
      params: {
        'name': name
      }
    })
  }

  getAll() {
    return this.products.asObservable()
  }

  create(product: Product, onComplete?: () => void) {
    return this.postRequest(product).subscribe(product => {
      let products = this.products.getValue()
      products.push(product)
      this.products.next(products)
      if (onComplete) {
        onComplete()
      }
    })
  }

  edit(product: Product, onComplete?: () => void) {
    return this.putRequest(product).subscribe(product => {
      let products = this.products.getValue()
      products = products.map(p => p.id === product.id ? product : p)
      this.products.next(products)
      if (onComplete) {
        onComplete()
      }
    })
  }

  delete(product: Product, onComplete?: () => void) {
    return this.deleteRequest(product).subscribe(() => {
      let products = this.products.getValue()
      products = products.filter(p => p.id !== product.id)
      this.products.next(products)
      if (onComplete) {
        onComplete()
      }
    })
  }
}
