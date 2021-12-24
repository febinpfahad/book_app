import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataservicesService } from '../services/dataservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email=""
pswd=""
name=""
  constructor(private ds:DataservicesService,private router:Router) { }

  ngOnInit(): void {
  }
login(){
  
  var email_id = this.email
  var password = this.pswd
  
  this.ds.login( email_id, password)
    .subscribe((result: any) => {
      if (result) {
        localStorage.setItem("currentUser",result.currentUser)
        console.log(result)
        alert(result.message)
        if(result.user.isadmin)
        this.router.navigateByUrl("adminhome")
        else
        this.router.navigateByUrl("userhome")


      }
    },
      (result) => {
        alert(result.error.message)

      })

}

}
