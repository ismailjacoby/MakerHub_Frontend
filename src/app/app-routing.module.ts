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

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'productions', component:ProductionsComponent},
  {path:'samplepacks', component:SamplePacksComponent},
  {path:'contact', component:ContactComponent},
  {path:'licensing', component: LicensingInfoComponent},
  {path:'termsofuse', component:TermsOfUseComponent},
  {path:'privacypolicy', component:PrivacyPolicyComponent},
  {path:'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
