import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { LoginComponent } from './login/login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserviewbookComponent } from './userviewbook/userviewbook.component';
import { ViewallbookComponent } from './viewallbook/viewallbook.component';
import { ViewalluserComponent } from './viewalluser/viewalluser.component';

const routes: Routes = [
  {
    path:'addbook',component:AddbookComponent
  },
  {
    path:'viewallbook',component:ViewallbookComponent
  },
  {
    path:'register',component:UserRegComponent
  },
  {
    path:'',component: LoginComponent
  },
  {
    path:'userhome',component: UserhomeComponent
  },
  {
    path:'userviewbook',component: UserviewbookComponent
  },
  {
    path:'adminhome',component: AdminhomeComponent
  },
  {
    path:'viewalluser',component: ViewalluserComponent 
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
