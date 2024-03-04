import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ServicesComponent} from "./components/services/services.component";
import {ProductionsComponent} from "./components/productions/productions.component";
import {SamplePacksComponent} from "./components/sample-packs/sample-packs.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
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
