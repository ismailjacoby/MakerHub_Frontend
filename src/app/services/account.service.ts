import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../components/account/sign-up/sign-up.component";
import {Observable} from "rxjs";
import {User} from "../models/User";

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

  getUserByUsername(username: string): Observable<User> {
    return this._http.get<User>(`http://localhost:8080/account/user/${username}`);
  }

  editAccount(user: User): Observable<any> {
    return this._http.post<any>('http://localhost:8080/account/editaccount', user);
  }


}
