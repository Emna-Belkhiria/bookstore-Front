import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  formData!: Book;
  readonly rootURL ='http://localhost:8082/bookStore/api/livre';
  list!: Book[];
  book!:Book
   constructor(private http: HttpClient) { } 
  getAll(){
    return this.http.get(this.rootURL+'/getAllLivres')
    .toPromise()
    .then(res => this.list = res as Book[]);
  }
  createBook(formData : Book){
    return this.http.post(this.rootURL+'/addLivre', formData)
  }
  deletebook(id: number){
    return this.http.delete(this.rootURL + '/deleteLivre/' + id) ;
  }
  getById(id:number){
    this.http.get(this.rootURL+'/getLivre/'+id)
    .toPromise()
    .then(res => this.book = res as Book);
    return this.book;

  }
}

