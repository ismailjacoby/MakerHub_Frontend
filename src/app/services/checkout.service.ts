import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderDto} from "../models/OrderDto";
import {PaymentInfo} from "../common/payment-info";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private apiUrl = "http://localhost:8080/checkout"


  constructor(private _http: HttpClient) { }

  processCheckout(username: string): Observable<OrderDto> {
    const params = new HttpParams().set('username', username);
    return this._http.post<OrderDto>(`${this.apiUrl}/purchase`, {}, { params: params });
  }

  createPaymentIntent(paymentInfo: PaymentInfo): Observable<any>{
    return this._http.post<PaymentInfo>(`${this.apiUrl}/payment-intent`, paymentInfo);
  }

  createCheckoutSession(username: string): Observable<{ checkoutSessionUrl: string }> {
    const params = new HttpParams().set('username', username);
    return this._http.post<{ checkoutSessionUrl: string }>(`${this.apiUrl}/create-checkout-session`,{},  { params });
  }


}
