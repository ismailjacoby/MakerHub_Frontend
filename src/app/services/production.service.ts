import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  constructor(private _http : HttpClient) { }

  uploadProduction(formData: FormData): Observable<HttpEvent<any>> {
    const req = new HttpRequest('POST', "http://localhost:8080/productions/upload", formData, {
      reportProgress: true
    });

    // Use HttpClient to send the request
    return this._http.request(req);
  }
}
