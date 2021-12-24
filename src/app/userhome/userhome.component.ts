import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
name:any
  constructor(private router:Router) {
    this.name=localStorage.getItem("currentUser")
   }

  ngOnInit(): void {
  }

}
