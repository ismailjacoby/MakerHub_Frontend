import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ForgotpasswordComponent} from "./forgotpassword/forgotpassword.component";
import {EditAccountComponent} from "./edit-account/edit-account.component";

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component:SignUpComponent},
  {path:'forgotpassword', component: ForgotpasswordComponent},
  {path:'editaccount', component:EditAccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
