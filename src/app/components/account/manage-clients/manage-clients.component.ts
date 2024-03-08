import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {AccountService} from "../../../services/account.service";

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrl: './manage-clients.component.css'
})
export class ManageClientsComponent implements OnInit{
  clients: User[] = [];

  constructor(private _accountService: AccountService) {}

  ngOnInit(): void {
    this._accountService.getAllClient().subscribe((data) => {
      this.clients = data;
    });
  }

  changeActiveStatus(username: string){
    this._accountService.deactivateAccount(username).subscribe(()=>
      this._accountService.getAllClient().subscribe(
        (data)=> this.clients=data));
  }

  changeBlockedStatus(username:string){
    this._accountService.blockAccount(username).subscribe(()=>
      this._accountService.getAllClient().subscribe(
        (data)=>this.clients=data));
  }


}




