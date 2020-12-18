import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lineorder } from '../models/lineorder';
import { BookService } from '../services/book.service';
import { LineorderService } from '../services/lineorder.service';

@Component({
  selector: 'app-ligneorder',
  templateUrl: './ligneorder.component.html',
  styleUrls: ['./ligneorder.component.css']
})
export class LigneorderComponent implements OnInit {
list!:Lineorder[];
somme!:number;
  constructor(public lineorderservice:LineorderService, public bookService:BookService, private route:Router) { }

  ngOnInit(): void {
   this.lineorderservice.getAllOrder();
    this.list=this.lineorderservice.list;
  }
  Somme(){
    this.list.forEach(element => {
      this.somme = this.somme+element.prixpd})
      return this.somme;
  }
  
  validate(){
    this.lineorderservice.deleteAll();
    this.route.navigateByUrl('/order')
  }
  

  

}
