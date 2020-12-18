import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BooksComponent } from './books/books.component';
import { LigneorderComponent } from './ligneorder/ligneorder.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [  {
  path: 'books',
  component: BooksComponent
},
{
  path: 'book-add',
  component: BookAddComponent
},
{
  path: 'order',
  component: OrderComponent
}
,
{
  path: 'allorder',
  component: LigneorderComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
