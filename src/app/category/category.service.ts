import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Array<Category>>("/api/category")
  }
}
