import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Production} from "../models/Production";

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  private baseUrl = "http://localhost:8080/productions";

  constructor(private _http : HttpClient) { }

  uploadProduction(production: FormData): Observable<HttpEvent<any>> {
    return this._http.post<HttpEvent<any>>(`${this.baseUrl}/upload`, production, {
      observe: 'events',
      reportProgress: true
    });
  }

  getAllProductions(): Observable<Production[]> {
    return this._http.get<Production[]>(`${this.baseUrl}/list`);
  }
}
