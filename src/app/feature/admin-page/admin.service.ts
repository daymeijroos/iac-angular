import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  isAdmin(): Observable<boolean> {
    return this.http.get<boolean>("/api/admin/isAdmin")
  }
}
