import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ShippingDetails } from './shipping-details.interface';

@Injectable({
  providedIn: 'root'
})
export class ShippingDetailsService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<ShippingDetails>("/api/shippingDetails")
      .pipe(catchError(error => {
        switch(error.status){
          case 403:
            return of("Forbidden");
          case 404:
            return of("Shipping details not found");
          case 500:
            return of("Internal server error");
          default:
            return of("Unknown error");
        }
      }))
  }
}
