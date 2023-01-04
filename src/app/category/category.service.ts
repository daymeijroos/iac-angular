import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { Category } from './category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private auth: AuthService) {}

  getAll() {
    return this.http.get<Array<Category>>("/api/category")
  }
}
