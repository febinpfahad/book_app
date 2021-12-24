import { Component, OnInit } from '@angular/core';
import { DataservicesService } from '../services/dataservices.service';

@Component({
  selector: 'app-userviewbook',
  templateUrl: './userviewbook.component.html',
  styleUrls: ['./userviewbook.component.css']
})
export class UserviewbookComponent implements OnInit {
books:any
  constructor(private ds:DataservicesService) {
    this.viewBook()
   }

  ngOnInit(): void {
  }
viewBook(){
  this.ds.allbook()
  .subscribe((result: any) => {
    if (result) {
      // result.sort((a:any,b:any)=>(a.result.book_name>b.result.book_name)?1:((b.result.book_name>a.result.book_name)?-1 :0))
    
      console.log(result)
      this.books=result.book
    }
  },
    (result) => {
      console.log(result.error.message)

    })

}
}
