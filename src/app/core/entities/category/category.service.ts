import { BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: BehaviorSubject<Array<Category>>;

  constructor(private http: HttpClient) {
    this.categories = new BehaviorSubject<Array<Category>>([]);
    this.getRequest().subscribe(categories => this.categories!.next(categories));
  }

  private getRequest() {
    return this.http.get<Array<Category>>("/api/category")
  }

  private postRequest(category: Category) {
    return this.http.post<Category>("/api/admin/category", category)
  }

  private putRequest(category: Category) {
    if (!category.id) {
      throw new Error("Category id is required")
    }
    return this.http.put<Category>("/api/admin/category", category, { params: { id: category.id } })
  }

  private patchRequest(category: Category) {
    if (!category.id) {
      throw new Error("Category id is required")
    }
    return this.http.patch<Category>("/api/admin/category", category, { params: { id: category.id } })
  }

  private deleteRequest(category: Category) {
    if (!category.id) {
      throw new Error("Category id is required")
    }
    return this.http.delete<Category>("/api/admin/category", { params: { id: category.id } })
  }

  getAll() {
    return this.categories.asObservable();
  }

  create(category: Category, onComplete?: () => void) {
    return this.postRequest(category).subscribe(category => {
      let categories = this.categories.getValue()
      categories.push(category)
      this.categories.next(categories)
      if (onComplete) {
        onComplete()
      }
    })
  }

  edit(category: Category, onComplete?: () => void) { 
    return this.patchRequest(category).subscribe(() => {
      let categories = this.categories.getValue()
      categories = categories.map(c => c.id === category.id ? category : c)
      this.categories.next(categories)
      if (onComplete) {
        onComplete()
      }
    })
  }

  delete(category: Category, onComplete?: () => void) {
    return this.deleteRequest(category).subscribe(() => {
      let categories = this.categories.getValue()
      categories = categories.filter(c => c.id !== category.id)
      this.categories.next(categories)
      if (onComplete) {
        onComplete()
      }
    })
  }
}
