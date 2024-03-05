import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private _http: HttpClient) { }

  subscribeToNewsLetter(email: string): Observable<any>{
    return this._http.post<any>('http://localhost:8080/newsletter/subscribe', { email });
  }
}
