import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from '../models/book';
import { Lineorder } from '../models/lineorder';
import { User } from '../models/user';
import { BookService } from '../services/book.service';
import { LineorderService } from '../services/lineorder.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderline! :Lineorder;
  book!:Book;
  constructor(public bookService:BookService, private lineorderService:LineorderService, private route : Router) { }

  ngOnInit(): void {
    this.bookService.getAll();
  }
  addline(id:number,qte:number){
    this.book=this.bookService.getById(id);
    console.log(this.book);
    this.orderline=this.lineorderService.formData={
     numLigne:0,
     quantite:qte,
     prixpd:0,
     book:this.book
    }
    this.lineorderService.createorder(this.orderline,id).subscribe(res=>
      {
        console.log("ajout avec succées")
      })
    
  }
  purchase(){
    this.route.navigateByUrl('/allorder')
  }


}
