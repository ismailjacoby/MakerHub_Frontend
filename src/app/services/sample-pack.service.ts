import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {SamplePack} from "../models/SamplePack";

@Injectable({
  providedIn: 'root'
})
export class SamplePackService {
  private baseUrl = 'http://localhost:8080/samplepack';

  constructor(private _http: HttpClient) { }

  uploadSamplePack(formData: FormData): Observable<HttpEvent<any>> {
    return this._http.post<any>(`${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  getSamplePacks(): Observable<SamplePack[]> {
    return this._http.get<SamplePack[]>(`${this.baseUrl}/list`);
  }

  getSamplePackById(id: number): Observable<SamplePack> {
    return this._http.get<SamplePack>(`${this.baseUrl}/${id}`);
  }

  deleteSamplePack(samplePackId: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/delete/${samplePackId}`);
  }
}
