import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../components/account/sign-up/sign-up.component";
import {Observable, of} from "rxjs";
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
  deactivateAccount(username: string): Observable<any> {
    return this._http.patch<any>(`http://localhost:8080/account/deactivate/${username}`, null);
  }
  blockAccount(username: string): Observable<any>{
    return this._http.patch<any>(`http://localhost:8080/account/block/${username}`,null);
  }

  getAllClient(): Observable<User[]>{
    return this._http.get<User[]>(`http://localhost:8080/account/clients/all`);
  }


}
