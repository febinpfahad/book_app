import { Component, OnInit } from '@angular/core';
import { DataservicesService } from '../services/dataservices.service';

@Component({
  selector: 'app-viewallbook',
  templateUrl: './viewallbook.component.html',
  styleUrls: ['./viewallbook.component.css']
})
export class ViewallbookComponent implements OnInit {
books:any
name:any
description:any
price:any
editFlag:any
book_id:any
book_name:any
  constructor(private ds:DataservicesService) { 
    
    this.viewbook()
  }

  ngOnInit(): void {
  }
  viewbook() {
    
    this.ds.allbook()
      .subscribe((result: any) => {
        if (result) {
          // console.log(result.book)
          this.books=result.book
        }
      },
        (result) => {
          console.log(result.error.message)

        })
  }
  edit(event:any){
    // console.log(event.currentTarget.attributes.id.value)
    this.ds.findBookById(event.currentTarget.attributes.id.value)
    .subscribe((result: any) => {
      if (result) {
        this.editFlag=true
        console.log(result.book)
        this.name=result.book.book_name
        this.description=result.book.description
        this.price=result.book.price
        this.book_id=result.book._id

        // this.books=result.book
      }
    },
      (result) => {
        console.log(result.error.message)

      })
// console.log(event.currentTarget.attributes.id.value)
  }
  delete(event:any){
    // console.log(event.currentTarget.attributes.id.value)
var id=event.currentTarget.attributes.id.value

this.ds.deleteBook(id)
      .subscribe((result: any) => {
        if (result) {
          // console.log(result.book)
          alert(result.message)
        }
      },
        (result) => {
          console.log(result.error.message)

        })

  }
  cancelEdit(){
    this.editFlag=false
  }
  
update(updatedPrice:any,event:any){
// console.log(event.currentTarget.attributes.id.value)
  // console.log(updatedPrice)
var price=updatedPrice
var id=event.currentTarget.attributes.id.value
console.log(price)
this.ds.editBook(id,price)
      .subscribe((result: any) => {
        if (result) {
          // console.log(result.book)
          alert(result.message)
        }
      },
        (result) => {
          console.log(result.error.message)

        })

}

search(){
var book_name=this.book_name
this.ds.searchByName(book_name)
      .subscribe((result: any) => {
        if (result) {
          // console.log(result.book)
          this.books=result.book
        }
      },
        (result) => {
          console.log(result.error.message)

        })
}
  }


