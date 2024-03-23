import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:8080';

  constructor(private _http: HttpClient) { }

  sendContactForm(contactFormData: any): Observable<any>{
    return this._http.post(`${this.baseUrl}/contact`, contactFormData,
      { responseType: 'text' });
  }
}
