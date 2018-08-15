import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import component for whom u want to set up routing
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
//set paths here
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    //:id here is parameter passed
    path:'aboutpage/:id/:whatever',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
