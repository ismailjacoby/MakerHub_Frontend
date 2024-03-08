import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../../services/account.service";
import {User} from "../../../models/User";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  client!: User;

  constructor(private _accountService: AccountService, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const username = this._route.snapshot.paramMap.get('username');
    if(username){
      this._accountService.getUserByUsername(username).subscribe((data) => {
        this.client = data;
      });
    }

  }



  changeActiveStatus(username: string){
    this._accountService.deactivateAccount(username).subscribe(()=>
      this._accountService.getUserByUsername(username).subscribe(
        (data)=> this.client=data));
  }

  changeBlockedStatus(username:string){
    this._accountService.blockAccount(username).subscribe(()=>
      this._accountService.getUserByUsername(username).subscribe(
        (data)=>this.client=data));
  }

}
