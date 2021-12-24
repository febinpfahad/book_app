import { Component, OnInit } from '@angular/core';
import { DataservicesService } from '../services/dataservices.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {
name=""
email=""
pswd=""
  constructor(private ds:DataservicesService) { }

  ngOnInit(): void {
  }

  register(){
    var name = this.name
    var email_id = this.email
    var password = this.pswd
    
    this.ds.addUser(name, email_id, password)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
        }
      },
        (result) => {
          alert(result.error.message)

        })
  }
}
