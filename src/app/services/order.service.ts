import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = "http://localhost:8080/orders";
  constructor(private _http: HttpClient) { }

  getOrdersByUsername(username: string): Observable<any[]> {
    let params = new HttpParams().set('username', username);
    return this._http.get<any[]>(`${this.apiUrl}/list`, {params});
  }
}
