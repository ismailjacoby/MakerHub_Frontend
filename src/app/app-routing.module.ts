import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ServicesComponent} from "./components/services/services.component";
import {ProductionsComponent} from "./components/productions/productions.component";
import {SamplePacksComponent} from "./components/sample-packs/sample-packs.component";
import {ContactComponent} from "./components/contact/contact.component";
import {FaqComponent} from "./components/guidelines/faq/faq.component";
import {LicensingInfoComponent} from "./components/guidelines/licensing-info/licensing-info.component";
import {TermsOfUseComponent} from "./components/guidelines/terms-of-use/terms-of-use.component";
import {PrivacyPolicyComponent} from "./components/guidelines/privacy-policy/privacy-policy.component";
import {Error404Component} from "./components/shared/error404/error404.component";
import {SignUpComponent} from "./components/account/sign-up/sign-up.component";
import {LoginComponent} from "./components/account/login/login.component";
import {UnsubscribeComponent} from "./components/unsubscribe/unsubscribe.component";

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'productions', component:ProductionsComponent},
  {path:'samplepacks', component:SamplePacksComponent},
  {path:'contact', component:ContactComponent},
  {path:'signup', component:SignUpComponent},
  {path:'login', component:LoginComponent},
  {path:'licensing', component: LicensingInfoComponent},
  {path:'termsofuse', component:TermsOfUseComponent},
  {path:'privacypolicy', component:PrivacyPolicyComponent},
  {path:'unsubscribe',component:UnsubscribeComponent},
  {path:'faq', component: FaqComponent},
  {path:'**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
