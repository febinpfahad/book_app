import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule } from '@angular/forms';
import { ViewallbookComponent } from './viewallbook/viewallbook.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserviewbookComponent } from './userviewbook/userviewbook.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewalluserComponent } from './viewalluser/viewalluser.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    ViewallbookComponent,
    UserRegComponent,
    LoginComponent,
    UserhomeComponent,
    UserviewbookComponent,
    AdminhomeComponent,
    ViewalluserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
