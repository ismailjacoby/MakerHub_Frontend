import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ]
})
export class AccountModule { }
