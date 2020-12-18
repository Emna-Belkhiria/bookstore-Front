import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  isValid = true;

  constructor(public bookService: BookService,private toastr: ToastrService) { }
   
  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.bookService.formData = {
      id:0,
      reference:0,
      titre:'',
      auteur:'',
      dateRealisation:'',
      designation:'',
      prixUnitaire:0,
}}
onSubmit(form: NgForm){
  if (this.validateForm()){
  this.bookService.createBook(form.value).subscribe(res => {
  this.resetForm(form);
  this.toastr.success('Ajout site avec Succés');
},
err => {
  console.log(err);
}); }
else {
  this.toastr.error('Forme invalide');
}
}
validateForm() {
  this.isValid = true;
 if (this.bookService.formData.reference === 0) {
    this.isValid = false;
}
else if (this.bookService.formData.titre === '') {
  this.isValid = false;
}
else if (this.bookService.formData.auteur === '') {
  this.isValid = false;
}
else if (this.bookService.formData.dateRealisation === '') {
  this.isValid = false;
}
else if (this.bookService.formData.designation === '') {
  this.isValid = false;
}
else if (this.bookService.formData.prixUnitaire === 0) {
  this.isValid = false;
}
  return this.isValid;
}

}

