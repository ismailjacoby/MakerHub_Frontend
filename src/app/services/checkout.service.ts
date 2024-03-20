import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderDto} from "../models/OrderDto";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private apiUrl = "http://localhost:8080"

  constructor(private _http: HttpClient) { }

  processCheckout(username: string): Observable<OrderDto> {
    const params = new HttpParams().set('username', username);
    return this._http.post<OrderDto>(`${this.apiUrl}/checkout`, {}, { params: params });
  }
}
