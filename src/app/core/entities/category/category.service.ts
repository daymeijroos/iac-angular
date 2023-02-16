import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  categories?: Observable<Array<Category>>;

  getAll() {
    //this.categories = this.http.get<Array<Category>>("/api/category");
    return this.http.get<Array<Category>>("/api/category");
  }

  create(category: Category) {
    return this.http.post<Category>("/api/admin/category", category)
  }

  delete(category: Category) {
    return this.http.delete(`/api/admin/category`, { params: { id: category.id! } })
  }
}
