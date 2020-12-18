import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[]=[];
  constructor(public bookService: BookService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.bookService.getAll();
  }
  onDelete(id:number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.bookService.deletebook(id)
        .subscribe(res => {
          this.bookService.getAll();
          this.toastr.warning('Suppression effectuée avec succées');
        },
        err => {
          this.toastr.error('Suppression impossible');
              });
            }
          }
}
