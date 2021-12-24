import { Component, OnInit } from '@angular/core';
import { DataservicesService } from '../services/dataservices.service';

@Component({
  selector: 'app-viewalluser',
  templateUrl: './viewalluser.component.html',
  styleUrls: ['./viewalluser.component.css']
})
export class ViewalluserComponent implements OnInit {
users:any
  constructor(private ds:DataservicesService) { 
    this.viewalluser()
  }

  ngOnInit(): void {
  }
viewalluser(){
  this.ds.alluser()
      .subscribe((result: any) => {
        if (result) {
          
          // console.log(result.book)
          this.users=result.user
          // this.users.sort()
        }
      },
        (result) => {
          console.log(result.error.message)

        })
}

}
