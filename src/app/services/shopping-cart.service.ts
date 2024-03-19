import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CartItems} from "../models/CartItems";
import {HttpClient, HttpParams} from "@angular/common/http";
import {LicenseType} from "../models/LicenseType";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private apiUrl = 'http://localhost:8080/shoppingCart';

  constructor(private _http: HttpClient) {}

  getCartItems(username: string): Observable<any> {
    let params = new HttpParams().set('username', username);
    return this._http.get<any>(`${this.apiUrl}/cart/items`, { params });
  }

  addItemToCart(username: string, itemId: number, isProduction: boolean, licenseType: LicenseType): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('itemId', itemId.toString())
      .set('isProduction', isProduction.toString())
      .set('licenseType', LicenseType[licenseType].toString());

    return this._http.post(`${this.apiUrl}/addItem`, {}, { params, responseType: 'text' });
  }

  removeItemFromCart(username: string, cartItemId: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}/removeItem/${username}/${cartItemId}`,{ responseType: 'text' });
  }

}
