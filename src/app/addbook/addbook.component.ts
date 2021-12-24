import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataservicesService } from '../services/dataservices.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  bid = ""
  bname = ""
  desc = ""
  price = ""
  img=""
  selectedFile=""
  constructor(private ds: DataservicesService,private router:Router) { }

  ngOnInit(): void {
  }
  addbook() {
    var book_id = this.bid
    var book_name = this.bname
    var description = this.desc
    var price = this.price
    var image=this.selectedFile
    console.log(this.selectedFile)
    this.ds.addbook(book_id, book_name, description, price,image)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
        }
      },
        (result) => {
          alert(result.error.message)

        })
  }
  viewbook(){
    this.router.navigateByUrl('viewallbook')
  }
  onFileSelected(event:any){
  // console.log(event);
  this.selectedFile=event.explicitOriginalTarget.files[0]
  
  }
}
