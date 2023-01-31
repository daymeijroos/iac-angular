import { Order } from './order.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}

  post(order: Order) {
    return this.http.post<Order>('http://localhost:4200/api/order', order, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
      .pipe(catchError(error => {
        switch(error.status){
          case 403:
            return of("Forbidden")
          case 500:
            return of("Internal server error")
          default:
            return of("Unknown error")
        }
      }))
  }

  getAll() {
    return this.http.get<Array<Order>>('http://localhost:4200/api/admin/order')
      .pipe(catchError(error => {
        switch(error.status){
          case 403:
            return of("Forbidden")
          case 500:
            return of("Internal server error")
          default:
            return of("Unknown error")
        }
      }))
  }
}
