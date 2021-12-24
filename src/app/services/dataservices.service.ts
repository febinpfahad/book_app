import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  constructor(private http:HttpClient) { }
  addbook(book_id:any,book_name:any,description:any,price:any,image:any):Observable<any>{
    const formData: FormData = new FormData();

    formData.append('file', image);
    formData.append('book_id',book_id)
    formData.append('book_name',book_name)
    formData.append('description',description)
    formData.append('price',price)
    

    const data={
      book_id,
      book_name,
     description,
      price,
      image
    }
    return this.http.post("http://localhost:3000/addbook",formData)
  }
  allbook(){
   
    const data={
      
    }
    return this.http.post("http://localhost:3000/allbook",data)
  }

  findBookById(id:any){
   
    const data={
      id
    }
    return this.http.post("http://localhost:3000/findBookById",data)
  }

  searchByName(book_name:any){
   
    const data={
      book_name
    }
    return this.http.post("http://localhost:3000/searchByName",data)
  }

  editBook(id:any,price:any){
   
    const data={
      id,
      price
    }
    return this.http.post("http://localhost:3000/editBook",data)
  }
  deleteBook(id:any){
   
    const data={
      id
    }
    return this.http.post("http://localhost:3000/deleteBook",data)
  }

  addUser(name:any,email_id:any,password:any){
   var date=new Date()
   console.log(date)
    const data={
      name,
      email_id,
      password
     
    }
    return this.http.post("http://localhost:3000/addUser",data)
  }

  login(email_id:any,password:any){
   
    const data={
      
      email_id,
      password
     
    }
    return this.http.post("http://localhost:3000/login",data)
  }

  alluser(){
   
    const data={
      
    }
    return this.http.post("http://localhost:3000/alluser",data)
  }

}
