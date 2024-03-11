import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadProductionsComponent} from "./upload-productions/upload-productions.component";
import {BeatsComponent} from "./beats/beats.component";

const routes: Routes = [
  {path:'', redirectTo: 'beats', pathMatch: 'full'},
  {path:'beats', component:BeatsComponent},
  {path:'upload', component:UploadProductionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionsRoutingModule { }
