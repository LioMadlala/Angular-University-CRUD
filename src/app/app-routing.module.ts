import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeComponent } from './home/HomeComponent.component';

const routes: Routes = [
  {path:"start", component:GetStartedComponent},
  {path:"home", component:HomeComponent},
  {
    path: '',
    redirectTo: "/start",
    pathMatch: 'full'
  }
];
@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [RouterModule]
})
export class AppRoutingModule { }
