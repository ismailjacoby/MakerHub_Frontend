import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ServicesComponent} from "./services/services.component";
import {ProductionsComponent} from "./productions/productions.component";
import {SamplePacksComponent} from "./sample-packs/sample-packs.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'productions', component:ProductionsComponent},
  {path:'samplepacks', component:SamplePacksComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
