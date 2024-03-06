import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../components/account/sign-up/sign-up.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http: HttpClient) { }

  signUp(account: Account): Observable<any>{
    return this._http.post<any>('http://localhost:8080/account/signup', account)
  }

  forgotPassword(email: String): Observable<any>{
    return this._http.post<any>('http://localhost:8080/account/forgotpassword', { email });
  }
}
