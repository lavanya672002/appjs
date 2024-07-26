import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginpage/loginpage.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path:'', redirectTo:'new',pathMatch:'full'},

  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'list',component:ListComponent},
  // {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'new', component: NewComponent},
  {path: "**", redirectTo:'/login'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
